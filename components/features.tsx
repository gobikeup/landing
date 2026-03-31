"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { BlurFade } from "@/components/ui/blur-fade"

const features = [
  {
    title: "Rutas reales por ciclovías.",
    description:
      "Calculadas sobre 6.504 km de ciclovías de Santiago con datos de SECTRA. Andrés Bello, Pocuro, Alameda, Costanera — turn-by-turn real. No más avenidas de 4 carriles.",
    image: "/features/rutas-ciclovias.jpg",
    alt: "Ciclistas pedaleando por la ciclovía del río Mapocho en Santiago, con árboles y la cordillera de fondo",
  },
  {
    title: "SOS en 3 segundos.",
    description:
      "Long press, countdown y listo. SMS a tus contactos, deep link a WhatsApp y llamada al 131. Sin soltar el manubrio.",
    image: "/features/sos-emergencia.jpg",
    alt: "Manos de ciclista en el manubrio con celular montado, listo para usar",
  },
  {
    title: "Alertas comunitarias.",
    description:
      "8 tipos de reporte: bache, vidrio, robo, obra, perro, ciclovía bloqueada. Votos y expiración automática.",
    image: "/features/alertas-comunitarias.jpg",
    alt: "Ciclista frente a un letrero de ciclovía cerrada por obras en Santiago",
  },
  {
    title: "Talleres de bicicleta en Santiago.",
    description:
      "Pins con clustering, ficha completa y contacto directo. Desde Maipú hasta Las Condes, ayuda cerca cuando la necesitas.",
    image: "/features/talleres-bicicleta.jpg",
    alt: "Mecánico trabajando en un taller de bicicletas profesional",
  },
  {
    title: "Marketplace de servicios.",
    description:
      "Busca por tipo de servicio y cercanía. Reviews de la comunidad. Conecta directo.",
    image: "/features/marketplace-servicios.jpg",
    alt: "Mecánico de bicicletas con delantal de herramientas reparando una bici",
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
              5 funciones para ciclistas en Santiago.
            </h2>
          </BlurFade>
          <BlurFade delay={0.14} inView>
            <p className="mt-4 text-base text-muted-foreground lg:text-lg">
              No 20 features a medias. 5 que funcionan perfecto desde el día uno en toda la Región Metropolitana.
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
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:rounded-3xl">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
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
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:rounded-3xl">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
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
