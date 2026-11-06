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
          permanente de nuestros sistemas, salvo las excepciones acotadas que se
          detallan a continuación (ver también nuestra{" "}
          <Link href="/privacidad">Política de Privacidad</Link>).
        </p>
        <h2>Qué se conserva y por cuánto tiempo</h2>
        <p>
          Al eliminar tu cuenta borramos de forma permanente tus datos
          personales asociados: tu cuenta, historial de pedaleos, estadísticas
          de actividad, contactos de emergencia y reseñas. Tus alertas
          comunitarias públicas se eliminan o se anonimizan/desvinculan de tu
          identidad. Solo se conservan, de forma acotada, las siguientes
          categorías:
        </p>
        <ul>
          <li>
            <strong>Ubicación de tus emergencias SOS:</strong> se conserva hasta{" "}
            <strong>90 días</strong> y luego se elimina automáticamente.
          </li>
          <li>
            <strong>
              Direcciones IP, registros técnicos (logs) y telemetría de errores:
            </strong>{" "}
            hasta <strong>90 días</strong>.
          </li>
          <li>
            <strong>Respaldos cifrados:</strong> tus datos pueden permanecer un
            período breve en respaldos cifrados antes de su sobrescritura
            definitiva, sin usarse para ninguna otra finalidad.
          </li>
          <li>
            <strong>Información que la ley nos obligue a conservar:</strong> solo
            durante el plazo legal aplicable y aislada de cualquier otro uso.
          </li>
          <li>
            <strong>Aportes al mapa de movilidad:</strong> no están ligados a tu
            cuenta, así que no podemos ubicarlos para borrarlos. El recorrido de
            cada aporte se borra solo en menos de 24 horas, y lo que queda son
            conteos junto a los de otras personas.
          </li>
          <li>
            <strong>Huellas de promociones:</strong> si participaste en una
            promoción y borras tu cuenta antes de su cierre, las huellas de tu
            dispositivo y de tu correo se conservan hasta ese día, solo para que
            no se vuelva a reclamar el beneficio desde el mismo teléfono o
            correo, y luego se borran.
          </li>
          <li>
            <strong>Cupo usado de una promoción:</strong> si recibiste un código,
            el registro deja de estar ligado a ti y queda solo como un cupo usado
            de la promoción, para contar los cupos.
          </li>
        </ul>
      </article>
    </main>
  )
}
