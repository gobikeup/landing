import { StoreButtons } from "@/components/store-buttons"
import { DotPattern } from "@/components/ui/dot-pattern"
import { BlurFade } from "@/components/ui/blur-fade"

export function CTA() {
  return (
    <section id="descargar" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--primary)_0%,transparent_70%)] opacity-[0.12]" />
      <DotPattern
        className="absolute inset-0 text-primary/15 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_75%)]"
        cr={1}
        width={20}
        height={20}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <BlurFade delay={0} inView>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              La app ciclista de Santiago, gratis.
            </h2>
          </BlurFade>

          <BlurFade delay={0.1} inView>
            <p className="mt-4 text-lg text-muted-foreground">
              Descárgala y sal a pedalear con rutas por ciclovías reales.
            </p>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <StoreButtons className="mt-8 justify-center" />
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="mt-6 text-xs text-muted-foreground/60">
              Gratis, y puedes usarla sin crear una cuenta. Por ahora, solo Santiago.
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
