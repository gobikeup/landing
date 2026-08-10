// Los dos correos que dispara el formulario de /empresas: el aviso al equipo y
// el acuse a quien lo completó.
//
// Las reglas de acá no son preferencias de estilo, son las del medio: tablas y
// estilos inline porque Outlook renderiza con el motor de Word; sin webfonts
// porque Gmail elimina el <link>; imágenes hospedadas en R2 porque Gmail
// bloquea las `data:`; y `bgcolor` de respaldo en cada header porque muchos
// clientes no cargan imágenes por defecto.
//
// Los colores son espejo de `api/src/emails/tokens.ts`. Se duplican a propósito:
// la API es otro repo, y tenerlos en un archivo por lado hace que una
// desincronización sea un diff de una línea y no una cacería por plantillas.

import { headcountLabel, type Lead } from "@/lib/empresas"

export interface RenderedEmail {
  subject: string
  html: string
}

const COLORS = {
  logo: "#1BA24A",
  brand: "#2F6B4F",
  brandDeep: "#234F3B",
  brandPale: "#EEF5F0",
  ink: "#1A1A18",
  inkSoft: "#4A4A42",
  inkFaint: "#8C8C7C",
  paper: "#FFFFFF",
  canvas: "#F5F5F0",
  footer: "#F9F9F6",
  rule: "#E8E8E0",
} as const

const ICON = "https://uploads.gobikeup.cl/brand/icon-512.png"
const FONT =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"
const WIDTH = 600

/** Todo dato del usuario pasa por acá. Un nombre con `<` rompe el correo, y uno
 *  malicioso inyecta marcado en un mensaje que enviamos NOSOTROS. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

/** Hora local de Santiago: el equipo lee estos correos en Chile, y un timestamp
 *  en UTC obliga a hacer la resta mentalmente cada vez. */
function santiagoNow(): string {
  return new Intl.DateTimeFormat("es-CL", {
    timeZone: "America/Santiago",
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date())
}

function shell(headerBg: string, header: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:${COLORS.canvas};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${COLORS.canvas};">
<tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="${WIDTH}" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:${WIDTH}px;background-color:${COLORS.paper};border-radius:12px;overflow:hidden;">
<tr><td bgcolor="${headerBg}" style="background-color:${headerBg};padding:24px 32px;">${header}</td></tr>
<tr><td style="padding:32px;font-family:${FONT};font-size:16px;line-height:1.6;color:${COLORS.ink};">${body}</td></tr>
<tr><td bgcolor="${COLORS.footer}" style="background-color:${COLORS.footer};padding:20px 32px;border-top:1px solid ${COLORS.rule};font-family:${FONT};font-size:12px;line-height:1.5;color:${COLORS.inkFaint};">
GoBike SpA · Santiago de Chile · <a href="https://www.gobikeup.cl" style="color:${COLORS.inkFaint};">gobikeup.cl</a>
</td></tr>
</table>
</td></tr>
</table>
</body></html>`
}

function row(label: string, value: string, href?: string): string {
  const content = href
    ? `<a href="${href}" style="color:${COLORS.brand};text-decoration:none;">${value}</a>`
    : value
  return `<tr>
<td style="padding:10px 0;border-bottom:1px solid ${COLORS.rule};font-family:${FONT};font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:${COLORS.inkFaint};width:38%;vertical-align:top;">${label}</td>
<td style="padding:10px 0;border-bottom:1px solid ${COLORS.rule};font-family:${FONT};font-size:15px;color:${COLORS.ink};font-weight:600;">${content}</td>
</tr>`
}

/**
 * El aviso que llega al equipo.
 *
 * Se manda con Reply-To de quien completó el formulario, así que contestarle es
 * apretar "Responder" — sin copiar direcciones a mano. Por lo mismo el asunto
 * lleva la empresa y el tamaño al frente: en la bandeja se decide a quién
 * responder primero sin abrir nada.
 */
export function teamLeadEmail(lead: Lead): RenderedEmail {
  const company = escapeHtml(lead.company)
  const size = headcountLabel(lead.headcount)

  // El icono va a la izquierda y el texto al lado, en dos celdas: si se pusiera
  // encima empujaría el nombre de la empresa fuera de la vista previa del móvil,
  // que es justo lo que se quiere leer sin abrir el correo.
  const header = `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
<td width="44" valign="top" style="padding-right:14px;">
<img src="${ICON}" width="44" height="44" alt="GoBikeUp" style="display:block;border:0;border-radius:10px;">
</td>
<td valign="top">
<div style="font-family:${FONT};font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${COLORS.paper};">Empresa interesada</div>
<div style="padding-top:6px;font-family:${FONT};font-size:22px;font-weight:700;color:${COLORS.paper};">${company}</div>
</td>
</tr></table>`

  const note = lead.message
    ? `<div style="margin-top:24px;padding:16px;background-color:${COLORS.brandPale};border-radius:8px;">
<div style="font-family:${FONT};font-size:12px;letter-spacing:0.04em;text-transform:uppercase;color:${COLORS.brand};font-weight:700;">Lo que nos contó</div>
<div style="margin-top:8px;font-family:${FONT};font-size:15px;line-height:1.6;color:${COLORS.ink};">${escapeHtml(lead.message)}</div>
</div>`
    : ""

  const newsletter = lead.newsletter
    ? `<div style="margin-top:16px;font-family:${FONT};font-size:13px;color:${COLORS.inkSoft};">Autorizó recibir novedades de GoBikeUp.</div>`
    : ""

  const body = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
${row("Nombre", escapeHtml(lead.name))}
${row("Cargo", escapeHtml(lead.role))}
${row("Empresa", company)}
${row("Colaboradores", size)}
${row("Correo", escapeHtml(lead.email), `mailto:${encodeURIComponent(lead.email)}`)}
${row("Teléfono", escapeHtml(lead.phone), `tel:${lead.phone.replace(/[^\d+]/g, "")}`)}
</table>
${note}
${newsletter}
<div style="margin-top:24px;font-family:${FONT};font-size:13px;color:${COLORS.inkFaint};">
Llegó el ${santiagoNow()} desde el formulario de <a href="https://www.gobikeup.cl/empresas" style="color:${COLORS.inkFaint};">gobikeup.cl/empresas</a>.
</div>`

  return {
    subject: `Empresa interesada — ${lead.company} (${size})`,
    html: shell(COLORS.brandDeep, header, body),
  }
}

/**
 * El acuse a quien completó el formulario.
 *
 * A propósito NO promete plazo de respuesta: prometer "te contactamos en 48
 * horas" es fácil de escribir y caro de cumplir un sábado. Confirma que llegó,
 * repite lo que mandó para que pueda corregir, y deja la puerta abierta.
 */
export function leadAckEmail(lead: Lead): RenderedEmail {
  const header = `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
<td width="44" style="padding-right:14px;"><img src="${ICON}" width="44" height="44" alt="GoBikeUp" style="display:block;border:0;border-radius:10px;"></td>
<td style="font-family:${FONT};font-size:18px;font-weight:700;color:${COLORS.paper};">GoBikeUp</td>
</tr></table>`

  const body = `<p style="margin:0 0 16px;font-family:${FONT};font-size:16px;line-height:1.6;color:${COLORS.ink};">
Hola ${escapeHtml(lead.name)},
</p>
<p style="margin:0 0 16px;font-family:${FONT};font-size:16px;line-height:1.6;color:${COLORS.ink};">
Gracias por tu interés en GoBikeUp para empresas. Recibimos los datos de
<strong>${escapeHtml(lead.company)}</strong> y ya están con nuestro equipo.
</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0;">
${row("Nombre", escapeHtml(lead.name))}
${row("Cargo", escapeHtml(lead.role))}
${row("Colaboradores", headcountLabel(lead.headcount))}
${row("Teléfono", escapeHtml(lead.phone))}
</table>
<p style="margin:0;font-family:${FONT};font-size:16px;line-height:1.6;color:${COLORS.inkSoft};">
Pedalea tranquilo,<br>El equipo de GoBikeUp
</p>`

  return {
    subject: "Recibimos tus datos",
    html: shell(COLORS.brand, header, body),
  }
}
