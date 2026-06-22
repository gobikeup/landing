import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: { absolute: "Seguridad infantil — GoBikeUp" },
  description:
    "Política de seguridad infantil de GoBikeUp: tolerancia cero frente al abuso y la explotación sexual infantil (CSAE). Cómo reportar contenido y cómo escalamos a las autoridades.",
  alternates: {
    canonical: "https://www.gobikeup.cl/seguridad-infantil",
  },
}

export default function SeguridadInfantilPage() {
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
        <h1>Seguridad infantil</h1>
        <p className="text-sm text-muted-foreground/60">
          Última actualización: 21 de junio de 2026
        </p>

        <p>
          GoBikeUp es una app de navegación ciclista para Santiago de Chile con
          funciones comunitarias —reseñas de talleres y alertas en la vía— que
          permiten contenido creado por la comunidad. La protección de los
          menores es una prioridad para nosotros. Esta página describe nuestra
          postura frente al material de abuso y explotación sexual infantil
          (CSAE, por su sigla en inglés) y cómo actuamos ante él.
        </p>

        <h2>Tolerancia cero</h2>
        <p>
          Prohibimos de forma absoluta cualquier contenido, enlace o conducta
          que abuse, sexualice o ponga en riesgo a un menor de edad, incluido el
          material de abuso sexual infantil (CSAM). Esta norma rige en todos los
          espacios de la app: reseñas, alertas, nombres, fotos y cualquier texto
          que publiquen los usuarios. No hacemos excepciones. Toda cuenta
          involucrada en este tipo de contenido se suspende de forma permanente.
        </p>

        <h2>Cómo reportar</h2>
        <p>
          Si ves contenido que pone en riesgo a un menor, repórtalo de
          inmediato. Tienes dos vías:
        </p>
        <p>
          <strong>Desde la app</strong>
        </p>
        <ol>
          <li>Abre la reseña o alerta que quieres reportar.</li>
          <li>
            Toca el menú de opciones del contenido y elige{" "}
            <strong>Reportar</strong>.
          </li>
          <li>
            Selecciona la categoría <strong>Seguridad infantil</strong> —aparece
            primera y destacada en la lista— y envía el reporte.
          </li>
        </ol>
        <p>
          <strong>Por correo</strong>
        </p>
        <p>
          Escríbenos a{" "}
          <a href="mailto:child-safety@gobikeup.com">
            child-safety@gobikeup.com
          </a>{" "}
          con una descripción del contenido y dónde lo viste. Si puedes, adjunta
          una captura de pantalla.
        </p>
        <p>
          Si crees que un menor está en peligro inmediato, contacta primero a
          Carabineros llamando al <strong>133</strong> o a la Policía de
          Investigaciones (PDI) al <strong>134</strong>.
        </p>

        <h2>Cómo respondemos</h2>
        <p>
          Los reportes de seguridad infantil tienen la máxima prioridad en
          nuestra cola de moderación, por encima de cualquier otro tipo de
          reporte. Nuestro compromiso es revisarlos en menos de 24 horas.
        </p>
        <p>Cuando confirmamos contenido CSAE:</p>
        <ul>
          <li>Preservamos la evidencia de forma segura antes de removerla.</li>
          <li>Eliminamos el contenido de la app.</li>
          <li>Suspendemos al autor de forma permanente.</li>
          <li>Escalamos el caso a las autoridades competentes.</li>
        </ul>

        <h2>Escalamiento a las autoridades</h2>
        <p>
          Reportamos el material de abuso sexual infantil a las autoridades
          correspondientes y cooperamos con sus investigaciones:
        </p>
        <ul>
          <li>
            <strong>Chile</strong> — Brigada Investigadora del Cibercrimen de la
            Policía de Investigaciones (PDI). Puedes denunciar en{" "}
            <a
              href="https://www.pdichile.cl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              pdichile.cl
            </a>
            .
          </li>
          <li>
            <strong>Internacional</strong> — National Center for Missing &amp;
            Exploited Children (NCMEC), a través de su{" "}
            <a
              href="https://report.cybertip.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CyberTipline
            </a>
            , que coordina con las autoridades de cada país.
          </li>
        </ul>
        <p>
          Conservamos la evidencia asociada durante el tiempo que la
          investigación lo requiera.
        </p>

        <h2>Contacto</h2>
        <p>
          Para cualquier asunto relacionado con seguridad infantil, escríbenos a{" "}
          <a href="mailto:child-safety@gobikeup.com">
            child-safety@gobikeup.com
          </a>
          .
        </p>
      </article>
    </main>
  )
}
