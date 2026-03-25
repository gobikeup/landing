"use client"

import { motion } from "motion/react"
import { BlurFade } from "@/components/ui/blur-fade"

const features = [
  {
    title: "Rutas reales por ciclovias.",
    description:
      "Calculadas sobre 6.504 km de ciclovias de Santiago con datos de SECTRA. Turn-by-turn real. No mas avenidas de 4 carriles.",
    gradient:
      "radial-gradient(ellipse at 30% 50%, oklch(0.6 0.14 160 / 0.3), transparent 60%), radial-gradient(ellipse at 70% 30%, oklch(0.55 0.12 155 / 0.2), transparent 50%), radial-gradient(ellipse at 50% 80%, oklch(0.5 0.08 165 / 0.15), transparent 60%), linear-gradient(135deg, oklch(0.92 0.02 160) 0%, oklch(0.96 0.01 160) 50%, oklch(0.9 0.03 155) 100%)",
  },
  {
    title: "SOS en 3 segundos.",
    description:
      "Long press, countdown y listo. SMS a tus contactos, deep link a WhatsApp y llamada al 131. Sin soltar el manubrio.",
    gradient:
      "radial-gradient(ellipse at 60% 40%, oklch(0.6 0.15 30 / 0.2), transparent 55%), radial-gradient(ellipse at 30% 70%, oklch(0.55 0.12 35 / 0.15), transparent 50%), radial-gradient(ellipse at 80% 80%, oklch(0.5 0.08 25 / 0.1), transparent 60%), linear-gradient(135deg, oklch(0.93 0.01 30) 0%, oklch(0.96 0.005 30) 50%, oklch(0.91 0.02 25) 100%)",
  },
  {
    title: "Alertas comunitarias.",
    description:
      "8 tipos de reporte: bache, vidrio, robo, obra, perro, ciclovia bloqueada. Votos y expiracion automatica.",
    gradient:
      "radial-gradient(ellipse at 40% 30%, oklch(0.58 0.13 160 / 0.25), transparent 55%), radial-gradient(ellipse at 70% 70%, oklch(0.52 0.1 155 / 0.15), transparent 50%), linear-gradient(160deg, oklch(0.93 0.015 160) 0%, oklch(0.95 0.01 165) 100%)",
  },
  {
    title: "Talleres en el mapa.",
    description:
      "Pins con clustering, ficha completa y contacto directo. Ayuda cerca cuando la necesitas.",
    gradient:
      "radial-gradient(ellipse at 50% 40%, oklch(0.57 0.12 158 / 0.22), transparent 55%), radial-gradient(ellipse at 25% 75%, oklch(0.53 0.09 162 / 0.12), transparent 50%), linear-gradient(145deg, oklch(0.92 0.018 158) 0%, oklch(0.96 0.008 162) 100%)",
  },
  {
    title: "Marketplace de servicios.",
    description:
      "Busca por tipo de servicio y cercania. Reviews de la comunidad. Conecta directo.",
    gradient:
      "radial-gradient(ellipse at 65% 35%, oklch(0.56 0.11 163 / 0.2), transparent 55%), radial-gradient(ellipse at 35% 65%, oklch(0.54 0.1 157 / 0.15), transparent 50%), linear-gradient(130deg, oklch(0.94 0.012 163) 0%, oklch(0.92 0.02 157) 100%)",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header — centered */}
        <div className="mx-auto max-w-2xl text-center">
          <BlurFade delay={0} inView>
            <p className="mb-4 text-sm font-medium text-primary">
              Tu viaje, cubierto
            </p>
          </BlurFade>
          <BlurFade delay={0.08} inView>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              5 cosas que hacen la diferencia.
            </h2>
          </BlurFade>
          <BlurFade delay={0.14} inView>
            <p className="mt-4 text-base text-muted-foreground lg:text-lg">
              No 20 features a medias. 5 que funcionan perfecto desde el dia uno.
            </p>
          </BlurFade>
        </div>

        {/* Top row — 2 large cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {features.slice(0, 2).map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className="aspect-[4/3] w-full rounded-2xl lg:rounded-3xl"
                style={{ background: feature.gradient }}
              />
              <div className="mt-5 lg:mt-6">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row — 3 cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          {features.slice(2).map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className="aspect-[4/3] w-full rounded-2xl lg:rounded-3xl"
                style={{ background: feature.gradient }}
              />
              <div className="mt-5 lg:mt-6">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
