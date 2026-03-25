"use client"

import { motion } from "motion/react"
import { Smartphone, MapPin, Bike } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"

const steps = [
  {
    icon: Smartphone,
    title: "Abre la app",
    description:
      "El mapa carga con tu posicion y la red de ciclovias de Santiago. Sin login obligatorio, sin setup.",
  },
  {
    icon: MapPin,
    title: "Elige tu destino",
    description:
      "Busca una direccion y recibe la ruta optima por ciclovias reales de Santiago.",
  },
  {
    icon: Bike,
    title: "Pedalea tranquilo",
    description:
      "Navegacion turn-by-turn, alertas en tiempo real y SOS siempre disponible.",
    isDestination: true,
  },
]

function Connector() {
  return (
    <div className="hidden items-center md:flex" aria-hidden="true">
      <svg width="100%" height="2" viewBox="0 0 100 2" preserveAspectRatio="none">
        <line
          x1="0"
          y1="1"
          x2="100"
          y2="1"
          stroke="var(--primary)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          opacity="0.2"
        />
      </svg>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative border-y border-border bg-muted py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <BlurFade delay={0} inView>
            <p className="mb-4 text-sm font-medium text-primary">
              Como funciona
            </p>
          </BlurFade>
          <BlurFade delay={0.08} inView>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Abres y pedaleas.
            </h2>
          </BlurFade>
          <BlurFade delay={0.14} inView>
            <p className="mt-4 text-base text-muted-foreground lg:text-lg">
              Sin tutoriales, sin crear cuenta, sin configurar nada. Asi de simple.
            </p>
          </BlurFade>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 items-start gap-8 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-0 lg:mt-20">
          {steps.map((step, i) => (
            <div key={step.title} className="contents">
              {/* Connector before step 2 and 3 */}
              {i > 0 && <Connector />}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ${
                    step.isDestination
                      ? "bg-primary shadow-[0_0_24px_-6px_var(--primary)]"
                      : "border border-border bg-card"
                  }`}
                >
                  <step.icon
                    className={`h-6 w-6 ${
                      step.isDestination
                        ? "text-primary-foreground"
                        : "text-primary"
                    }`}
                  />
                </div>
                <h3
                  className={`mb-2 text-base font-semibold ${
                    step.isDestination ? "text-primary" : "text-foreground"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="max-w-[220px] text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
