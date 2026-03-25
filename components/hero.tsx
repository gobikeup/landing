"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { TextAnimate } from "@/components/ui/text-animate"
import { DotPattern } from "@/components/ui/dot-pattern"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { WordRotate } from "@/components/ui/word-rotate"
import { Globe } from "@/components/ui/globe"

const SANTIAGO_GLOBE = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 4.9,
  theta: 0.35,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 36000,
  mapBrightness: 1.2,
  baseColor: [0.9, 0.9, 0.9] as [number, number, number],
  markerColor: [0.32, 0.69, 0.46] as [number, number, number],
  glowColor: [0.85, 0.85, 0.85] as [number, number, number],
  markers: [],
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <DotPattern
        className="absolute inset-0 text-primary/20 [mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_80%)] lg:hidden"
        cr={1.2}
        width={24}
        height={24}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <AnimatedGradientText className="mb-6 inline-flex">
              <span className="text-sm font-medium text-muted-foreground">
                Santiago, Chile &middot; 6.504 km de ciclovías
              </span>
            </AnimatedGradientText>
          </motion.div>

          <TextAnimate
            as="h1"
            by="word"
            animation="blurInUp"
            duration={0.6}
            className="max-w-3xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            once
          >
            Pedalea tranquilo.
          </TextAnimate>

          <motion.div
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex max-w-xl flex-col gap-2"
          >
            <span className="sr-only">
              La primera app de navegacion ciclista pensada para ciclistas en Santiago de Chile.
              Rutas reales por ciclovias, emergencia SOS y una comunidad que te cuida.
            </span>
            <span aria-hidden="true" className="block text-lg leading-relaxed text-muted-foreground">
              La primera app de navegacion pensada para{" "}
              <WordRotate
                words={["ciclistas", "Santiago", "ti"]}
                className="inline-block font-semibold text-primary"
              />
            </span>
            <p aria-hidden="true" className="text-muted-foreground">
              Rutas reales por ciclovias, emergencia SOS y una comunidad que te
              cuida.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.7,
              type: "spring",
              stiffness: 280,
              damping: 24,
            }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#descargar">
              <ShimmerButton
                className="h-12 px-6 text-base font-semibold"
                shimmerColor="var(--primary-foreground)"
                background="var(--primary)"
              >
                <span className="text-primary-foreground">
                  Únete a la waitlist
                </span>
              </ShimmerButton>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="h-12 gap-2 border-foreground/15 hover:border-foreground/30"
              asChild
            >
              <a href="#features">
                Conoce más
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden aspect-square lg:block"
        >
          <Globe config={SANTIAGO_GLOBE} />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
