"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Smartphone, MapPin, Bike } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"

const steps = [
  {
    icon: Smartphone,
    title: "Abre la app",
    description:
      "El mapa carga con tu posición y la red de ciclovías de Santiago. Sin login obligatorio, sin setup.",
    isDestination: false,
  },
  {
    icon: MapPin,
    title: "Elige tu destino",
    description:
      "Busca una dirección y recibe la ruta óptima por ciclovías reales de Santiago.",
    isDestination: false,
  },
  {
    icon: Bike,
    title: "Pedalea tranquilo",
    description:
      "Navegación turn-by-turn, alertas en tiempo real y SOS siempre disponible.",
    isDestination: true,
  },
]

// Bike lane connector between step icons — gentle S-curve
function BikeLaneConnector({
  isInView,
  flip = false,
}: {
  isInView: boolean
  flip?: boolean
}) {
  const path = flip
    ? "M 0 28 C 40 28, 50 4, 90 4 S 140 28, 180 28"
    : "M 0 4 C 40 4, 50 28, 90 28 S 140 4, 180 4"

  return (
    <svg
      viewBox="0 0 180 32"
      fill="none"
      className="h-8 w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Road surface */}
      <path
        d={path}
        stroke="var(--border)"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* Green tint */}
      <path
        d={path}
        stroke="var(--primary)"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
        opacity="0.06"
      />
      {/* Animated edge line */}
      <motion.path
        d={path}
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 0.35 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Center dashes */}
      <motion.path
        d={path}
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 8"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 0.2 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  )
}

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-80px" })

  return (
    <section
      id="como-funciona"
      className="relative border-y border-border bg-muted py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--primary)_0%,transparent_70%)] opacity-[0.10]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <BlurFade delay={0} inView>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary">
              Cómo funciona
            </p>
          </BlurFade>
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Así de simple.
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="mx-auto mt-4 mb-16 max-w-lg text-lg text-muted-foreground md:mb-20">
              Sin tutoriales, sin onboarding de 12 pasos. Abres y pedaleas.
            </p>
          </BlurFade>
        </div>

        {/* Desktop — 3 columns with bike lane connectors */}
        <div ref={ref} className="hidden md:block">
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-start gap-0">
            {/* Step 1 */}
            <BlurFade delay={0.25} inView>
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    delay: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-primary/30 bg-card shadow-sm"
                >
                  <Smartphone className="h-7 w-7 text-primary" />
                </motion.div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {steps[0].title}
                </h3>
                <p className="max-w-[240px] text-sm leading-relaxed text-muted-foreground">
                  {steps[0].description}
                </p>
              </div>
            </BlurFade>

            {/* Connector 1→2 */}
            <div className="mt-8 w-24 px-1 lg:w-32">
              <BikeLaneConnector isInView={isInView} />
            </div>

            {/* Step 2 */}
            <BlurFade delay={0.45} inView>
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    delay: 0.6,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-primary/30 bg-card shadow-sm"
                >
                  <MapPin className="h-7 w-7 text-primary" />
                </motion.div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {steps[1].title}
                </h3>
                <p className="max-w-[240px] text-sm leading-relaxed text-muted-foreground">
                  {steps[1].description}
                </p>
              </div>
            </BlurFade>

            {/* Connector 2→3 */}
            <div className="mt-8 w-24 px-1 lg:w-32">
              <BikeLaneConnector isInView={isInView} flip />
            </div>

            {/* Step 3 — Destination */}
            <BlurFade delay={0.65} inView>
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    delay: 0.9,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-primary bg-primary shadow-[0_0_30px_-4px_var(--primary)]"
                >
                  <Bike className="h-7 w-7 text-primary-foreground" />
                </motion.div>
                <h3 className="mb-2 text-lg font-bold text-primary">
                  {steps[2].title}
                </h3>
                <p className="max-w-[240px] text-sm leading-relaxed text-muted-foreground">
                  {steps[2].description}
                </p>
              </div>
            </BlurFade>
          </div>
        </div>

        {/* Mobile — vertical flow with bike lane */}
        <div className="relative md:hidden">
          <div className="absolute top-0 bottom-0 left-[27px] w-6 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-border/50" />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute inset-0 origin-top bg-primary/10"
            />
            <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{
                  duration: 1.8,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full w-full origin-top"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, var(--primary) 0px, var(--primary) 6px, transparent 6px, transparent 18px)",
                  opacity: 0.25,
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <BlurFade key={step.title} delay={0.3 + i * 0.2} inView>
                <div className="flex items-start gap-5 pl-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      delay: 0.4 + i * 0.25,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="relative z-10 shrink-0"
                  >
                    <div
                      className={`flex items-center justify-center rounded-2xl border-2 ${
                        step.isDestination
                          ? "h-14 w-14 border-primary bg-primary shadow-[0_0_24px_-4px_var(--primary)]"
                          : "h-14 w-14 border-primary/30 bg-card"
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
                  </motion.div>
                  <div className="pt-2">
                    <h3
                      className={`mb-1 text-base font-bold ${
                        step.isDestination ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
