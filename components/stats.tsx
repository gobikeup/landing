"use client"

import { Route, AlertTriangle, Shield, Phone } from "lucide-react"
import { NumberTicker } from "@/components/ui/number-ticker"
import { BlurFade } from "@/components/ui/blur-fade"
import { Marquee } from "@/components/ui/marquee"

const stats = [
  {
    icon: Route,
    value: 6504,
    suffix: "km",
    label: "ciclovías mapeadas",
    srValue: "6.504 km de ciclovías mapeadas en Santiago",
  },
  {
    icon: AlertTriangle,
    value: 8,
    suffix: "tipos",
    label: "de alertas activas",
    srValue: "8 tipos de alertas comunitarias activas",
  },
  {
    icon: Shield,
    value: 3,
    suffix: "seg",
    label: "para activar SOS",
    srValue: "3 segundos para activar SOS de emergencia",
  },
  {
    icon: Phone,
    value: 131,
    suffix: "",
    label: "emergencia directa",
    srValue: "131 número de emergencia directa Chile",
  },
]

const marqueeWords = [
  "Datos SECTRA",
  "Santiago completo",
  "Turn-by-turn real",
  "SOS integrado",
  "Comunidad activa",
  "Talleres verificados",
  "Reportes en vivo",
  "Pedalea tranquilo",
  "Ciclovías reales",
  "8 tipos de alerta",
]

export function Stats() {
  return (
    <section id="datos" className="relative border-y border-border bg-muted">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--primary)_0%,transparent_70%)] opacity-[0.10]" />
      <h2 className="sr-only">GoBikeUp en números</h2>
      {/* Marquee — ambient context strip arriba */}
      <div className="border-b border-border py-3">
        <Marquee pauseOnHover className="[--duration:50s] [--gap:3rem]">
          {marqueeWords.map((word) => (
            <span
              key={word}
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/40"
            >
              {word}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Stats grid — one horizontal band, compact and punchy */}
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {stats.map((stat, i) => (
            <BlurFade key={stat.label} delay={0.05 + i * 0.1} inView>
              <div className="group flex h-full flex-col items-center justify-center bg-card px-4 py-10 text-center transition-colors hover:bg-primary/[0.03] md:px-6 md:py-12">
                <span className="sr-only">{stat.srValue}</span>
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
                <div aria-hidden="true" className="flex items-baseline gap-0.5">
                  <NumberTicker
                    value={stat.value}
                    className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                  />
                  {stat.suffix && (
                    <span className="text-sm font-semibold text-primary">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <p aria-hidden="true" className="mt-1.5 text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Marquee — reversed, abajo */}
      <div className="border-t border-border py-3">
        <Marquee
          reverse
          pauseOnHover
          className="[--duration:50s] [--gap:3rem]"
        >
          {marqueeWords.map((word) => (
            <span
              key={word}
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/40"
            >
              {word}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
