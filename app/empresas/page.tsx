import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { LeadForm } from "@/components/empresas/lead-form"
import { BlurFade } from "@/components/ui/blur-fade"
import { DotPattern } from "@/components/ui/dot-pattern"

export const metadata: Metadata = {
  title: { absolute: "GoBikeUp para empresas" },
  description:
    "¿Tienes colaboradores que llegan pedaleando? Déjanos tus datos y conversamos cómo GoBikeUp puede acompañarlos: rutas por ciclovías reales de Santiago, botón SOS y talleres en el mapa.",
  alternates: {
    canonical: "https://www.gobikeup.cl/empresas",
  },
  openGraph: {
    title: "GoBikeUp para empresas",
    description:
      "Déjanos tus datos y conversamos cómo GoBikeUp puede acompañar a quienes llegan pedaleando a tu empresa.",
    url: "https://www.gobikeup.cl/empresas",
    type: "website",
    locale: "es_CL",
    siteName: "GoBikeUp",
  },
}

const PUNTOS = [
  "Rutas por las ciclovías reales de Santiago, no por calles con autos.",
  "Botón SOS que avisa a los contactos que cada persona elija.",
  "Alertas de la comunidad y talleres a un tap, en el mapa.",
]

export default function EmpresasPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(ellipse_at_top,var(--primary)_0%,transparent_70%)] opacity-[0.10]" />
      <DotPattern
        className="absolute inset-x-0 top-0 h-[32rem] text-primary/15 [mask-image:radial-gradient(ellipse_at_top,white_20%,transparent_70%)]"
        cr={1}
        width={20}
        height={20}
      />

      <div className="relative z-10 mx-auto max-w-xl px-6 py-16 lg:py-24">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <BlurFade delay={0}>
          <p className="text-sm font-semibold tracking-wide text-primary">
            GoBikeUp para empresas
          </p>
        </BlurFade>

        <BlurFade delay={0.08}>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            ¿Tienes gente que llega pedaleando?
          </h1>
        </BlurFade>

        <BlurFade delay={0.14}>
          <p className="mt-4 text-lg text-muted-foreground">
            GoBikeUp es la app ciclista de Santiago: ya está publicada y es gratis. Cuéntanos
            de tu empresa y conversamos cómo puede acompañar a quienes se mueven en bici.
          </p>
        </BlurFade>

        <BlurFade delay={0.2}>
          <ul className="mt-6 flex flex-col gap-2.5 border-l-2 border-primary/30 pl-4">
            {PUNTOS.map((punto) => (
              <li key={punto} className="text-sm text-muted-foreground">
                {punto}
              </li>
            ))}
          </ul>
        </BlurFade>

        <BlurFade delay={0.26}>
          <div className="mt-12">
            <LeadForm />
          </div>
        </BlurFade>

        <BlurFade delay={0.32}>
          <section
            id="datos"
            className="mt-16 scroll-mt-8 border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground"
          >
            <h2 className="text-sm font-semibold text-foreground">Cómo usamos tus datos</h2>

            <p className="mt-3">
              El responsable del tratamiento es <strong className="font-medium text-foreground">GoBike
              SpA</strong>, RUT 78.427.191-9, con domicilio en Avda. Vitacura 5480, oficina 38,
              Vitacura, Santiago. Puedes escribirnos a{" "}
              <a
                href="mailto:contacto@gobikeup.com"
                className="text-primary underline underline-offset-2"
              >
                contacto@gobikeup.com
              </a>
              .
            </p>

            <p className="mt-3">
              <strong className="font-medium text-foreground">Para qué.</strong> Usamos los datos
              de este formulario con una sola finalidad: contactarte para presentarte GoBikeUp
              para empresas y responder tus consultas. La base de licitud es tu consentimiento y
              las gestiones previas a una eventual relación comercial (Ley N° 21.719). Si además
              marcaste la casilla de novedades, usaremos tu correo para eso; es una autorización
              separada y puedes revocarla cuando quieras.
            </p>

            <p className="mt-3">
              <strong className="font-medium text-foreground">Quién los procesa.</strong> Para
              recibir y responder tu mensaje nos apoyamos en <strong className="font-medium text-foreground">Vercel</strong>{" "}
              (alojamiento del sitio), <strong className="font-medium text-foreground">Upstash</strong>{" "}
              (base de datos donde queda tu solicitud) y{" "}
              <strong className="font-medium text-foreground">Resend</strong> (envío de los
              correos). Están fuera de Chile, así que enviar este formulario implica una
              transferencia internacional de tus datos. No los vendemos ni los compartimos con
              terceros para publicidad.
            </p>

            <p className="mt-3">
              <strong className="font-medium text-foreground">Por cuánto tiempo.</strong>{" "}
              Conservamos tus datos mientras dure la conversación y hasta 24 meses desde el último
              contacto. Después los eliminamos, salvo que hayamos iniciado una relación comercial.
            </p>

            <p className="mt-3">
              <strong className="font-medium text-foreground">Tus derechos.</strong> Puedes pedir
              acceso a tus datos, corregirlos, eliminarlos, oponerte a su tratamiento o pedir que
              te los entreguemos en un formato portable. Escríbenos a contacto@gobikeup.com y te
              respondemos por el mismo canal. También puedes reclamar ante la autoridad de
              protección de datos.
            </p>

            <p className="mt-4 text-muted-foreground/70">
              Este aviso cubre el formulario de esta página. El tratamiento de datos dentro de la
              app está en la{" "}
              <Link href="/privacidad" className="text-primary underline underline-offset-2">
                Política de Privacidad
              </Link>
              .
            </p>
          </section>
        </BlurFade>
      </div>
    </main>
  )
}
