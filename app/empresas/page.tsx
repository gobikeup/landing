import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ChevronDown } from "lucide-react"
import { LeadForm } from "@/components/empresas/lead-form"
import { Logo } from "@/components/logo"
import { BlurFade } from "@/components/ui/blur-fade"
import { DotPattern } from "@/components/ui/dot-pattern"

export const metadata: Metadata = {
  title: { absolute: "GoBikeUp para empresas" },
  description:
    "Impulsa la movilidad sustentable de tus colaboradores y mide el impacto generado. Con GoBikeUp puedes incentivar el uso de la bicicleta, fortalecer el bienestar y obtener métricas reales de viajes, kilómetros y CO₂ evitado.",
  alternates: {
    canonical: "https://www.gobikeup.cl/empresas",
  },
  openGraph: {
    title: "Convierte cada pedaleo de tu equipo en impacto para tu empresa",
    description:
      "Impulsa la movilidad sustentable de tus colaboradores y mide el impacto generado con GoBikeUp.",
    url: "https://www.gobikeup.cl/empresas",
    type: "website",
    locale: "es_CL",
    siteName: "GoBikeUp",
  },
}

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
          <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-primary">
            <Logo className="h-4 w-4 shrink-0" />
            GoBikeUp para empresas
          </p>
        </BlurFade>

        <BlurFade delay={0.12}>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Convierte cada pedaleo de tu equipo en impacto para tu empresa
          </h1>
        </BlurFade>

        <BlurFade delay={0.18}>
          <p className="mt-4 text-lg text-muted-foreground">
            Impulsa la movilidad sustentable de tus colaboradores y mide el impacto
            generado.
          </p>
        </BlurFade>

        <BlurFade delay={0.22}>
          <p className="mt-3 text-base text-muted-foreground">
            Con GoBikeUp puedes incentivar el uso de la bicicleta, fortalecer el bienestar y
            obtener métricas reales de viajes, kilómetros y CO₂ evitado.
          </p>
        </BlurFade>

        <BlurFade delay={0.24}>
          <div className="mt-12">
            <LeadForm />
          </div>
        </BlurFade>

        <BlurFade delay={0.3}>
          <details
            id="datos"
            className="group mt-16 scroll-mt-8 border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
              Cómo usamos tus datos
              <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
            </summary>

            <p className="mt-4">
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
              recibir y responder tu mensaje nos apoyamos en proveedores de nube y de correo que
              están <strong className="font-medium text-foreground">fuera de Chile</strong>, así
              que enviar este formulario implica una transferencia internacional de tus datos. Si
              quieres saber cuáles son, escríbenos y te lo contamos. No vendemos tus datos ni los
              compartimos con terceros para publicidad.
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
          </details>
        </BlurFade>
      </div>
    </main>
  )
}
