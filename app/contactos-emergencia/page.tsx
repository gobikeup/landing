import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ShieldQuestion } from "lucide-react"

export const metadata: Metadata = {
  title: { absolute: "Contactos de emergencia — GoBikeUp" },
  description:
    "Alguien te eligió como su contacto de emergencia en GoBikeUp. Qué significa, qué datos usamos, tus derechos según la Ley 21.719 y cómo salir cuando quieras.",
  alternates: {
    canonical: "https://www.gobikeup.cl/contactos-emergencia",
  },
}

export default function ContactosEmergenciaPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al inicio
      </Link>

      {/* Callout anti-estafa — responde el miedo #1 antes que todo */}
      <div className="mb-10 rounded-2xl border border-border bg-muted/50 p-6">
        <div className="flex items-start gap-3">
          <ShieldQuestion className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="font-semibold text-foreground">
              ¿Esto es real o es una estafa?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              El mensaje que recibiste siempre menciona el nombre de la persona
              que te agregó. Nunca te vamos a pedir dinero, claves ni códigos, y
              no necesitas apretar ningún enlace para aceptar o rechazar. Si
              tienes dudas, llama directamente a esa persona y pregúntale.
            </p>
          </div>
        </div>
      </div>

      <article className="prose prose-neutral max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-em:text-muted-foreground">
        <h1>Alguien te eligió para cuidarlo</h1>

        <p>
          Si llegaste aquí, es porque una persona que anda en bicicleta te
          designó como su contacto de emergencia en GoBikeUp. Eso significa que
          confía en ti para avisarte si alguna vez tiene un problema serio en la
          calle. En esta página te explicamos qué implica, qué datos tuyos
          usamos y cómo salir cuando quieras.
        </p>

        <h2>Qué es GoBikeUp</h2>
        <p>
          GoBikeUp es una app chilena para andar seguro en bicicleta por
          Santiago. Una de sus funciones es un <strong>botón de emergencia</strong>:
          si el ciclista tiene un accidente o se siente en peligro, lo aprieta y
          la app avisa a sus contactos de confianza con su ubicación.
        </p>

        <h2>Qué significa ser su contacto de emergencia</h2>
        <p>
          Significa que, si esa persona aprieta su botón de emergencia, tú
          recibes un aviso por WhatsApp con su ubicación, para ayudarla o pedir
          ayuda por ella. En la práctica funciona así:
        </p>
        <ol>
          <li>Te llega un mensaje de WhatsApp avisando que necesita ayuda.</li>
          <li>Ves en el mapa dónde está, con su ubicación en tiempo real.</li>
          <li>La llamas de inmediato.</li>
          <li>
            Si no contesta, llamas a una ambulancia: <strong>131 (SAMU)</strong>.
          </li>
        </ol>
        <p>
          Ojalá nunca pase. Pero si pasa, tu reacción puede marcar la
          diferencia.
        </p>

        <h2>Lo que esto NO es</h2>
        <p>
          <strong>No tienes que descargar ninguna app</strong>, no tienes que
          crear una cuenta y no tiene ningún costo. Además:
        </p>
        <ul>
          <li>
            <strong>No te rastreamos a ti.</strong> La ubicación que ves es la
            de la persona que activó la emergencia — nunca la tuya.
          </li>
          <li>No te enviaremos publicidad ni mensajes promocionales.</li>
          <li>No vendemos ni compartimos tus datos con nadie.</li>
          <li>
            Solo te escribiremos por este canal si esa persona activa una
            emergencia (o para confirmar tu respuesta a la invitación).
          </li>
        </ul>

        <h2>Qué datos tuyos usamos y para qué</h2>
        <p>
          Solo usamos <strong>tu número de WhatsApp</strong> y{" "}
          <strong>el nombre con que esa persona te agregó</strong>, con una
          única finalidad: avisarte si activa una emergencia. Los entregó el
          propio ciclista al designarte, y solo se usan dentro de la función de
          emergencia. Guardamos también tu respuesta a la invitación (sí o no,
          con fecha) como respaldo de tu decisión.
        </p>

        <h2>Tus derechos y la ley que te protege</h2>
        <p>
          En Chile, la <strong>Ley 21.719</strong> protege tus datos personales.
          Tratamos tu información sobre la base de tu consentimiento — por eso
          te preguntamos antes — y puedes retirarlo cuando quieras. Tienes
          derecho a:
        </p>
        <ul>
          <li>Acceder a los datos que tenemos sobre ti.</li>
          <li>Pedir que los corrijamos o eliminemos.</li>
          <li>Oponerte a su uso o retirar tu consentimiento.</li>
        </ul>
        <p>
          Guardamos tus datos solo mientras seas contacto de emergencia. Si
          sales, o si la persona que te agregó te elimina de su lista, dejamos
          de usarlos y los eliminamos de acuerdo con nuestra{" "}
          <Link href="/privacidad">Política de Privacidad</Link>.
        </p>

        <h2>Cómo dejar de ser contacto (cuando quieras)</h2>
        <p>
          Puedes salir en cualquier momento y sin dar explicaciones: escribe la
          palabra <strong>SALIR</strong> en el mismo chat de WhatsApp de
          GoBikeUp y listo — no recibirás más avisos y eliminaremos tus datos.
          También puedes escribirnos al correo de más abajo y lo hacemos por
          ti.
        </p>
        <p>
          Si rechazaste la invitación por error, no te preocupes: en el mismo
          chat puedes cambiar tu respuesta.
        </p>

        <h2>¿Dudas? Habla con nosotros</h2>
        <p>
          GoBikeUp es operado por <strong>GoBike SpA</strong>. Para cualquier
          duda sobre tus datos o para ejercer tus derechos, escríbenos a{" "}
          <a href="mailto:contacto@gobikeup.com">contacto@gobikeup.com</a>. Más
          detalle sobre cómo tratamos los datos personales en nuestra{" "}
          <Link href="/privacidad">Política de Privacidad</Link>.
        </p>
      </article>
    </main>
  )
}
