"use client"

import { motion, useInView } from "motion/react"
import { useRef, type ReactNode } from "react"
import Lottie from "lottie-react"
import lineAnimation from "@/public/animations/line.json"
import alertAnimation from "@/public/animations/Connection error.json"
import {
  Navigation,
  ShieldAlert,
  AlertTriangle,
  Wrench,
  Search,
  ChevronRight,
} from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { DotPattern } from "@/components/ui/dot-pattern"
import { BorderBeam } from "@/components/ui/border-beam"
import { ShineBorder } from "@/components/ui/shine-border"
import { MagicCard } from "@/components/ui/magic-card"

// — Animated SVG: Cycling Route Map —
function RouteAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-50px" })

  const routePath =
    "M 20 140 C 50 140, 60 60, 100 80 S 160 140, 190 100 C 210 70, 230 110, 260 90"

  return (
    <svg
      ref={ref}
      viewBox="0 0 280 180"
      fill="none"
      className="h-full w-full"
      aria-hidden="true"
    >
      {/* Street grid — abstract city blocks */}
      <line x1="70" y1="0" x2="70" y2="180" stroke="var(--border)" strokeWidth="1" opacity="0.5" />
      <line x1="140" y1="0" x2="140" y2="180" stroke="var(--border)" strokeWidth="1" opacity="0.5" />
      <line x1="210" y1="0" x2="210" y2="180" stroke="var(--border)" strokeWidth="1" opacity="0.5" />
      <line x1="0" y1="50" x2="280" y2="50" stroke="var(--border)" strokeWidth="1" opacity="0.5" />
      <line x1="0" y1="110" x2="280" y2="110" stroke="var(--border)" strokeWidth="1" opacity="0.5" />

      {/* Route shadow */}
      <path
        d={routePath}
        stroke="var(--primary)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.08"
      />
      {/* Animated route line */}
      <motion.path
        d={routePath}
        stroke="var(--primary)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          isInView
            ? { pathLength: 1, opacity: 0.6 }
            : { pathLength: 0, opacity: 0 }
        }
        transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Cyclist dot traveling the route */}
      <motion.circle
        r="5"
        fill="var(--primary)"
        initial={{ offsetDistance: "0%", opacity: 0 }}
        animate={
          isInView
            ? { offsetDistance: "100%", opacity: [0, 1, 1, 0] }
            : { offsetDistance: "0%", opacity: 0 }
        }
        transition={{ duration: 2.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ offsetPath: `path('${routePath}')` }}
      />

      {/* Origin pin */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformOrigin: "20px 140px" }}
      >
        <circle cx="20" cy="140" r="6" fill="var(--primary)" opacity="0.2" />
        <circle cx="20" cy="140" r="3" fill="var(--primary)" opacity="0.6" />
      </motion.g>
      {/* Destination pin */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ delay: 1.6, type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformOrigin: "260px 90px" }}
      >
        <circle cx="260" cy="90" r="8" fill="var(--primary)" opacity="0.15" />
        <circle cx="260" cy="90" r="4" fill="var(--primary)" />
      </motion.g>
    </svg>
  )
}

// — Animated SVG: SOS Beacon Pulse —
function SOSAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-50px" })

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 200"
      fill="none"
      className="h-full w-full"
      aria-hidden="true"
    >
      {/* Pulse rings — concentric expanding circles */}
      {[60, 45, 30].map((r, i) => (
        <motion.circle
          key={r}
          cx="100"
          cy="100"
          r={r}
          stroke="var(--primary)"
          strokeWidth="1.5"
          fill="none"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={
            isInView
              ? {
                  scale: [0.6, 1, 1.3],
                  opacity: [0, 0.3, 0],
                }
              : { scale: 0.6, opacity: 0 }
          }
          transition={{
            duration: 2.5,
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeOut",
          }}
          style={{ transformOrigin: "100px 100px" }}
        />
      ))}

      {/* Static ring — base */}
      <circle
        cx="100"
        cy="100"
        r="22"
        stroke="var(--primary)"
        strokeWidth="2"
        fill="none"
        opacity="0.15"
      />
      {/* Center button */}
      <motion.circle
        cx="100"
        cy="100"
        r="16"
        fill="var(--primary)"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformOrigin: "100px 100px" }}
      />
      {/* SOS text in center */}
      <motion.text
        x="100"
        y="100"
        textAnchor="middle"
        dominantBaseline="central"
        fill="var(--primary-foreground)"
        fontSize="9"
        fontWeight="700"
        letterSpacing="1"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6 }}
      >
        SOS
      </motion.text>
    </svg>
  )
}

function HeroFeature({
  icon: Icon,
  label,
  title,
  description,
  illustration,
  dotMaskPosition,
  delay,
  reverse = false,
}: {
  icon: React.ElementType
  label: string
  title: string
  description: string
  illustration: ReactNode
  dotMaskPosition: string
  delay: number
  reverse?: boolean
}) {
  return (
    <BlurFade delay={delay} inView>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="group relative overflow-hidden rounded-3xl border border-border bg-card"
      >
        <ShineBorder
          shineColor={["var(--primary)", "transparent"]}
          duration={16}
          borderWidth={1}
          className="opacity-40 transition-opacity duration-700 group-hover:opacity-100"
        />
        <BorderBeam
          size={200}
          duration={14}
          delay={delay * 10}
          colorFrom="var(--primary)"
          colorTo="transparent"
          borderWidth={1}
          className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <DotPattern
          className={`absolute inset-0 text-primary/8 ${dotMaskPosition}`}
          cr={1}
          width={22}
          height={22}
        />

        <div
          className={`relative z-10 grid grid-cols-1 items-center gap-6 p-8 md:grid-cols-2 md:gap-12 md:p-12 ${
            reverse ? "md:[direction:rtl]" : ""
          }`}
        >
          <div className={reverse ? "md:[direction:ltr]" : ""}>
            <div className="relative mb-5 inline-flex items-center gap-2 overflow-hidden rounded-full border border-primary/20 bg-primary/8 px-3 py-1">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
              <Icon className="relative h-3.5 w-3.5 text-primary" />
              <span className="relative text-xs font-semibold uppercase tracking-wider text-primary">
                {label}
              </span>
            </div>
            <h3 className="mb-3 text-2xl font-bold tracking-tight text-card-foreground md:text-3xl">
              {title}
            </h3>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>

          <div
            className={`flex items-center justify-center ${
              reverse ? "md:[direction:ltr]" : ""
            }`}
          >
            <div className="h-28 w-28 md:h-36 md:w-36 opacity-70">
              {illustration}
            </div>
          </div>
        </div>
      </motion.div>
    </BlurFade>
  )
}

const supportingFeatures = [
  {
    icon: AlertTriangle,
    title: "Alertas comunitarias",
    description:
      "8 tipos de reporte: bache, vidrio, robo, obra, perro, ciclovía bloqueada. Votos y expiración automática.",
  },
  {
    icon: Wrench,
    title: "Talleres en el mapa",
    description:
      "Pins con clustering, ficha completa y contacto directo. Ayuda cerca cuando la necesitas.",
  },
  {
    icon: Search,
    title: "Marketplace de servicios",
    description:
      "Busca por tipo de servicio y cercanía. Reviews de la comunidad. Conecta directo.",
  },
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--primary)_0%,transparent_70%)] opacity-[0.08]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <BlurFade delay={0} inView>
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary">
            Tu viaje, cubierto
          </p>
        </BlurFade>
        <BlurFade delay={0.1} inView>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            5 cosas que hacen la diferencia.
          </h2>
        </BlurFade>
        <BlurFade delay={0.15} inView>
          <p className="mt-4 mb-12 max-w-lg text-lg text-muted-foreground md:mb-16">
            No 20 features a medias. 5 que funcionan perfecto desde el día uno.
          </p>
        </BlurFade>

        <div className="flex flex-col gap-5">
          <HeroFeature
            icon={Navigation}
            label="Navegación"
            title="Rutas reales por ciclovías."
            description="Calculadas sobre 6.504 km de ciclovías de Santiago con datos de SECTRA. Turn-by-turn real. No más avenidas de 4 carriles."
            illustration={<Lottie animationData={lineAnimation} loop className="w-full" />}
            dotMaskPosition="[mask-image:radial-gradient(ellipse_at_top_right,white_20%,transparent_60%)]"
            delay={0.2}
          />

          <HeroFeature
            icon={ShieldAlert}
            label="Emergencia"
            title="SOS en 3 segundos."
            description="Long press, countdown y listo. SMS a tus contactos, deep link a WhatsApp y llamada al 131. Sin soltar el manubrio."
            illustration={<Lottie animationData={alertAnimation} loop className="w-full" />}
            dotMaskPosition="[mask-image:radial-gradient(ellipse_at_bottom_left,white_20%,transparent_60%)]"
            delay={0.3}
            reverse
          />
        </div>

        <div ref={ref} className="my-12 flex items-center gap-4 md:my-16">
          <div className="h-px flex-1 bg-border" />
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shrink-0 text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            Y cuando necesitas más
          </motion.span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {supportingFeatures.map((feature, i) => (
            <BlurFade key={feature.title} delay={0.35 + i * 0.1} inView>
              <MagicCard
                gradientSize={150}
                gradientColor="var(--primary)"
                gradientOpacity={0.08}
                gradientFrom="var(--primary)"
                gradientTo="transparent"
                className="h-full rounded-2xl"
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl p-6"
                >
                  <BorderBeam
                    size={80}
                    duration={8}
                    delay={i * 3}
                    colorFrom="var(--primary)"
                    colorTo="transparent"
                    borderWidth={1}
                    className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_-4px_var(--primary)]">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-1.5 text-base font-semibold text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Saber más
                    <ChevronRight className="h-3 w-3" />
                  </div>
                </motion.div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
