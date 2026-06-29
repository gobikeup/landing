import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Eliminar tu cuenta — GoBikeUp",
  description:
    "Cómo eliminar tu cuenta de GoBikeUp y tus datos personales, desde la app o escribiéndonos a contacto@gobikeup.com.",
  alternates: {
    canonical: "https://www.gobikeup.cl/eliminar-cuenta",
  },
}

export default function EliminarCuentaPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al inicio
      </Link>
      <article className="prose prose-neutral max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-em:text-muted-foreground">
        <h1>Eliminar tu cuenta</h1>
        <p>
          Para eliminar tu cuenta de GoBikeUp y tus datos personales, hazlo
          directamente desde la app:
        </p>
        <ol>
          <li>
            Abre la app <strong>GoBikeUp</strong>.
          </li>
          <li>
            Abre el menú (<strong>☰</strong>, arriba a la izquierda) y entra a
            tu <strong>Perfil</strong>.
          </li>
          <li>
            Toca el ícono de <strong>Configuración</strong> (engranaje).
          </li>
          <li>
            Toca <strong>Eliminar cuenta</strong> y confirma.
          </li>
        </ol>
        <p>
          Si no puedes acceder a la app, escríbenos a{" "}
          <a href="mailto:contacto@gobikeup.com">contacto@gobikeup.com</a> y
          procesaremos la eliminación de tu cuenta y de tus datos.
        </p>
        <p>
          Al confirmar la eliminación, tus datos personales se eliminan de forma
          permanente de nuestros sistemas, salvo la información puntual que la
          ley nos obligue a conservar (ver nuestra{" "}
          <Link href="/privacidad">Política de Privacidad</Link>).
        </p>
      </article>
    </main>
  )
}
