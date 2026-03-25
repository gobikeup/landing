"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import Lottie from "lottie-react"
import { MapPinOff, ShieldOff, EyeOff } from "lucide-react"
import { Highlighter } from "@/components/ui/highlighter"
import { BlurFade } from "@/components/ui/blur-fade"
import cyclistAnimation from "@/public/animations/Cycler.json"

const painPoints = [
  {
    number: "01",
    icon: MapPinOff,
    severity: "Molesto",
    title: "Sin rutas por ciclovías",
    description:
      "Google Maps te tira por avenidas. Waze no sabe que existes. Ninguna app usa las ciclovías reales de Santiago.",
  },
  {
    number: "02",
    icon: ShieldOff,
    severity: "Peligroso",
    title: "Sin emergencia para ciclistas",
    description:
      "Si te caes, te roban o pinchaste en la mitad de la nada, no hay un botón que avise a alguien por ti.",
  },
  {
    number: "03",
    icon: EyeOff,
    severity: "Crónico",
    title: "Peligros invisibles",
    description:
      "El bache que todo el mundo conoce, el vidrio en la ciclovía nueva. Esa info se pierde. No llega a quien pedalea mañana por la misma ruta.",
  },
]

function ConnectorLine({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={inView ? { scaleY: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-0 left-0 h-full w-px origin-top bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"
    />
  )
}

export function Problem() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="el-problema" className="relative bg-muted py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--primary)_0%,transparent_70%)] opacity-[0.12]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          {/* Left column — header + pain points */}
          <div>
            <BlurFade delay={0} inView>
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary">
                El problema
              </p>
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Andar en bici en Santiago{" "}
                <Highlighter
                  action="highlight"
                  color="var(--primary)"
                  strokeWidth={2}
                  animationDuration={800}
                  isView
                >
                  no debería dar miedo.
                </Highlighter>
              </h2>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="mt-4 mb-16 max-w-xl text-lg text-muted-foreground md:mb-20">
                Miles de ciclistas salen cada dia sin rutas reales, sin red de
                emergencia, sin nadie que les avise lo que viene. GoBikeUp es la
                primera app de navegacion ciclista pensada para Santiago.
              </p>
            </BlurFade>

            <div ref={sectionRef} className="relative ml-6 md:ml-12 lg:ml-16">
              <ConnectorLine inView={isInView} />

              <div className="flex flex-col gap-12 md:gap-16">
                {painPoints.map((point, i) => (
                  <BlurFade
                    key={point.number}
                    delay={0.3 + i * 0.2}
                    inView
                    direction="right"
                  >
                    <div className="relative pl-8 md:pl-12">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: 0.4 + i * 0.2,
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="absolute -left-6 top-1 md:-left-12 lg:-left-16"
                      >
                        <div
                          className="flex items-center justify-center rounded-full border-2 border-primary/30 bg-muted"
                          style={{
                            width: `${32 + i * 8}px`,
                            height: `${32 + i * 8}px`,
                          }}
                        >
                          <point.icon
                            className="text-primary"
                            style={{
                              width: `${16 + i * 2}px`,
                              height: `${16 + i * 2}px`,
                            }}
                          />
                        </div>
                      </motion.div>

                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-8">
                        <div className="flex shrink-0 items-baseline gap-3">
                          <span
                            className="font-bold tracking-tighter text-primary/20"
                            style={{
                              fontSize: `${2.5 + i * 0.75}rem`,
                              lineHeight: 1,
                            }}
                          >
                            {point.number}
                          </span>
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/50">
                            {point.severity}
                          </span>
                        </div>

                        <div className="max-w-lg">
                          <h3
                            className="mb-2 font-bold tracking-tight text-foreground"
                            style={{
                              fontSize: `${1.125 + i * 0.125}rem`,
                            }}
                          >
                            {point.title}
                          </h3>
                          <p className="leading-relaxed text-muted-foreground">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — Lottie cyclist */}
          <div className="hidden lg:block">
            <BlurFade delay={0.4} inView>
              <div className="sticky top-32">
                <Lottie
                  animationData={cyclistAnimation}
                  loop
                  className="w-full opacity-80"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
