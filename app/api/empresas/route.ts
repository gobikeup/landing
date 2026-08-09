// POST /api/empresas — recibe el formulario de empresas interesadas.
//
// Primo directo de `app/api/waitlist/route.ts`: misma trampa antibots, mismo
// esquema de límite por IP sobre el Redis de Upstash. Lo que cambia es que acá
// salen dos correos, y que el dato se GUARDA ANTES de intentar mandarlos: un
// proveedor de correo caído no puede costarnos un interesado que ya escribió
// sus datos y apretó el botón.

import { Redis } from "@upstash/redis"
import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"
import { validateLead, type Lead } from "@/lib/empresas"
import { leadAckEmail, teamLeadEmail } from "@/lib/emails/company-lead"

export const runtime = "nodejs"

/**
 * El cliente solo se instancia si hay credenciales de verdad.
 *
 * Sin ellas, el SDK acepta los comandos igual y los reintenta CINCO veces con
 * retroceso exponencial (hasta ~7 s el último) contra una URL inválida. Con
 * cuatro llamadas por envío eso son casi veinte segundos de espera antes de
 * rendirse — y el usuario mirando el botón girar todo ese rato.
 *
 * El retroceso acotado cubre el otro caso: credenciales correctas pero Upstash
 * caído. Un formulario de contacto no puede quedarse esperando a que una base
 * de datos vuelva; si el primer reintento no responde, se sigue sin ella.
 */
const redisUrl = process.env.KV_REST_API_URL
const redisToken = process.env.KV_REST_API_TOKEN

const redis =
  redisUrl && redisToken
    ? new Redis({
        url: redisUrl,
        token: redisToken,
        retry: { retries: 1, backoff: () => 250 },
      })
    : null

/** Cinco por hora deja pasar cualquier racha honesta —alguien que se equivocó y
 *  reenvía— y corta el flood. */
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW = 3600

/** Ventana corta contra el doble clic y el "no pasó nada, mando de nuevo".
 *  Corta a propósito: si a los quince minutos alguien reenvía con el teléfono
 *  corregido, queremos ese correo, no silenciarlo. */
const DEDUPE_WINDOW = 600

const LEADS_KEY = "empresas:leads"
const FROM = "GoBikeUp <contacto@gobikeup.com>"

/**
 * A quién le llega el aviso de una empresa interesada, fuera de local.
 *
 * Van los dos: cualquiera de las dos personas puede tomar el caso, y un lead
 * B2B que espera respuesta no puede depender de que una sola revise el correo.
 *
 * Para cambiar la lista NO hay que tocar código ni volver a publicar: basta
 * definir `LEAD_NOTIFY_TO` en Vercel con las direcciones separadas por coma.
 */
function teamRecipients(): string[] {
  const configured = process.env.LEAD_NOTIFY_TO?.split(",")
    .map((address) => address.trim())
    .filter(Boolean)

  return configured?.length
    ? configured
    : ["jpvergara@gobikeup.com", "storres@gobikeup.com"]
}

function getIP(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  )
}

/** Los logs de Vercel no son un lugar para correos completos. El dominio se
 *  conserva porque es lo único que sirve para diagnosticar un rebote. */
function maskEmail(email: string): string {
  const [user, domain] = email.split("@")
  if (!user || !domain) return "***"
  return `${user.slice(0, 1)}***@${domain}`
}

/** "Local" es literalmente "no estoy en Vercel": la plataforma siempre define
 *  `VERCEL_ENV` (production | preview | development). Solo en la máquina de
 *  alguien los correos se desvían; en preview y en producción salen de verdad. */
function isLocal(): boolean {
  return !process.env.VERCEL_ENV
}

/**
 * Corre una operación de Redis y sigue de largo si falla.
 *
 * Es deliberado: este formulario existe para que un interesado llegue al equipo,
 * y perder uno porque la base de datos tuvo un mal minuto sería el peor
 * resultado posible. Si Redis no responde, el límite por IP se cae —el honeypot
 * sigue en pie— pero el correo igual sale. Degradar es preferible a rechazar.
 */
async function tryRedis<T>(
  label: string,
  op: (client: Redis) => Promise<T>,
): Promise<T | null> {
  if (!redis) return null

  try {
    return await op(redis)
  } catch (err) {
    console.error(`[empresas] Redis falló en ${label}: ${String(err).slice(0, 160)}`)
    return null
  }
}

/**
 * En local TODO correo se redirige a una sola casilla.
 *
 * Sin esto, probar el formulario le llena la bandeja al equipo con empresas que
 * no existen — y peor: le manda un acuse real a la dirección de prueba que uno
 * haya escrito. Mismo criterio que usa el envío de correos de la API.
 *
 * En preview de Vercel los correos SÍ salen de verdad, así que ojo con probar
 * ahí usando la dirección de otra persona.
 */
function devRecipient(): string {
  return process.env.EMAIL_DEV_RECIPIENT?.trim() || "jpvergara@gobikeup.com"
}

/**
 * Deja que el acuse llegue de verdad al correo escrito en el formulario, aun
 * corriendo en local.
 *
 * Es lo único que la redirección impide probar: cómo se ve el correo en la
 * bandeja de quien completó el formulario, en su cliente, con su tipografía.
 * Se activa a mano con `EMAIL_DEV_SEND_REAL=true` y solo afecta al acuse — el
 * aviso al equipo sigue desviado, porque probar el formulario no tiene por qué
 * sonarle a nadie más.
 *
 * Cuidado al activarlo: el correo sale idéntico al de producción, así que usa
 * una dirección propia y no la de un tercero.
 */
function sendAckForReal(): boolean {
  return process.env.EMAIL_DEV_SEND_REAL === "true"
}

/** Devuelve si el aviso AL EQUIPO salió. Ese es el que importa para saber si el
 *  interesado llegó a alguna parte; el acuse es cortesía. */
async function sendEmails(lead: Lead): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn("[empresas] RESEND_API_KEY sin configurar — no se envió correo")
    return false
  }

  const resend = new Resend(apiKey)
  const local = isLocal()
  const team = teamLeadEmail(lead)
  const ack = leadAckEmail(lead)

  // El acuse puede salir de verdad en local si se pide a propósito; el aviso al
  // equipo, nunca. Y cuando el acuse va real, viaja sin el prefijo `[dev]`: la
  // idea es verlo tal como le llegará a una empresa.
  const ackReal = !local || sendAckForReal()

  const teamTo = local ? [devRecipient()] : teamRecipients()
  const leadTo = ackReal ? [lead.email] : [devRecipient()]
  const tag = local ? "[dev] " : ""
  const ackTag = ackReal ? "" : tag

  // En paralelo y con los errores capturados por separado: que el acuse falle
  // no puede impedir que el equipo se entere del interesado.
  const results = await Promise.allSettled([
    resend.emails.send({
      from: FROM,
      to: teamTo,
      subject: `${tag}${team.subject}`,
      html: team.html,
      // Responder = contestarle a quien dejó sus datos, sin copiar direcciones.
      replyTo: lead.email,
    }),
    resend.emails.send({
      from: FROM,
      to: leadTo,
      subject: `${ackTag}${ack.subject}`,
      html: ack.html,
    }),
  ])

  // Se registra el id que devuelve Resend: sin él, un correo que no llega es
  // indistinguible de uno que nunca se mandó. Con el id se busca el envío en el
  // panel y se ve si quedó entregado, en cola o rebotado.
  const labels = ["aviso al equipo", "acuse al interesado"]
  const destinos = [teamTo, leadTo]
  results.forEach((result, i) => {
    const destino = destinos[i].map(maskEmail).join(", ")

    if (result.status === "rejected") {
      console.error(`[empresas] falló el ${labels[i]}: ${String(result.reason).slice(0, 200)}`)
      return
    }

    const { data, error } = result.value
    if (error) {
      console.error(`[empresas] Resend rechazó el ${labels[i]} → ${destino}: ${error.name} — ${error.message}`)
      return
    }

    console.log(`[empresas] ${labels[i]} → ${destino} aceptado por Resend (id ${data?.id})`)
  })

  // El SDK no rechaza ante un error de la API: lo devuelve en `error`.
  const teamResult = results[0]
  return teamResult.status === "fulfilled" && !teamResult.value.error
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Honeypot — si este campo trae valor, es un bot. Respondemos éxito para no
    // enseñarle qué lo delató.
    if (body?.website) {
      return NextResponse.json({ message: "Listo, recibimos tus datos." })
    }

    // El límite va ANTES de validar: sin esto, un atacante puede hacernos
    // recorrer la validación de nueve campos sin costo.
    const ip = getIP(req)
    const rateLimitKey = `rl:empresas:${ip}`
    const currentCount =
      (await tryRedis("leer el límite", (r) => r.get<number>(rateLimitKey))) || 0

    if (currentCount >= RATE_LIMIT_MAX) {
      return NextResponse.json(
        { error: "Recibimos varios envíos desde tu conexión. Prueba nuevamente en una hora." },
        { status: 429 },
      )
    }

    const validation = validateLead(body)
    if (!validation.ok) {
      return NextResponse.json(
        { error: "Revisa los datos marcados.", fields: validation.errors },
        { status: 400 },
      )
    }
    const lead = validation.data

    await tryRedis("subir el contador", async (r) => {
      await r.incr(rateLimitKey)
      if (currentCount === 0) await r.expire(rateLimitKey, RATE_LIMIT_WINDOW)
    })

    // Guardar PRIMERO. Si Resend está caído, el interesado sigue acá y se puede
    // recuperar a mano. No guardamos la IP: sirve para el límite —y esa llave
    // expira en una hora— pero no para contactar a nadie.
    const stored =
      (await tryRedis("guardar el lead", (r) =>
        r.lpush(LEADS_KEY, JSON.stringify({ ...lead, at: new Date().toISOString() })),
      )) !== null

    // El dedupe controla el ENVÍO, no el registro: un reenvío queda guardado
    // igual, pero no vuelve a sonar dos veces en la bandeja del equipo. Si Redis
    // no responde tratamos el envío como primero — un correo repetido molesta
    // menos que uno que nunca llega.
    const firstSend = await tryRedis("marcar el envío", async (r) => {
      const res = await r.set(`empresas:sent:${lead.email}`, "1", {
        nx: true,
        ex: DEDUPE_WINDOW,
      })
      return res !== null
    })
    const shouldSend = firstSend ?? true

    const notified = shouldSend ? await sendEmails(lead) : true

    console.log(
      `[empresas] lead ${JSON.stringify({
        email: maskEmail(lead.email),
        headcount: lead.headcount,
        newsletter: lead.newsletter,
        stored,
        notified,
      })}`,
    )

    // Solo se le dice "no pudimos" a alguien cuando de verdad su dato no quedó
    // en ninguna parte: ni guardado ni avisado. Con cualquiera de los dos, el
    // interesado es recuperable y el mensaje de éxito es honesto.
    if (!stored && !notified) {
      return NextResponse.json(
        { error: "No pudimos recibir tus datos. Intenta de nuevo en unos minutos." },
        { status: 503 },
      )
    }

    return NextResponse.json({ message: "Listo, recibimos tus datos." })
  } catch (err) {
    // Resumen y no el error crudo: en este handler el error puede venir del
    // envío de correo, y Resend cita el campo `to` en sus validaciones.
    console.error(`[empresas] error inesperado: ${String(err).slice(0, 200)}`)
    return NextResponse.json(
      { error: "Algo salió mal. Intenta de nuevo." },
      { status: 500 },
    )
  }
}
