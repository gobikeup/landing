"use client"

import { useState } from "react"
import { ArrowRight, Loader2, Check } from "lucide-react"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Input } from "@/components/ui/input"
import { DotPattern } from "@/components/ui/dot-pattern"
import { BlurFade } from "@/components/ui/blur-fade"

type Status = "idle" | "loading" | "success" | "error"

export function CTA() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email || status === "loading") return

    setStatus("loading")
    try {
      const form = e.currentTarget
      const honeypot = (form.elements.namedItem("website") as HTMLInputElement)?.value

      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website: honeypot }),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus("error")
        setMessage(data.error)
        return
      }

      setStatus("success")
      setMessage(data.message)
      setEmail("")
    } catch {
      setStatus("error")
      setMessage("Algo salió mal. Intenta de nuevo.")
    }
  }

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
              Únete a la app ciclista de Santiago.
            </h2>
          </BlurFade>
          <BlurFade delay={0.1} inView>
            <p className="mt-4 text-lg text-muted-foreground">
              Déjanos tu correo y te avisamos cuando lancemos.
            </p>
          </BlurFade>

          <BlurFade delay={0.2} inView className="w-full">
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row mx-auto"
            >
              {/* Honeypot — invisible para usuarios, visible para bots */}
              <input
                type="text"
                name="website"
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                className="absolute left-[-9999px] opacity-0 h-0 w-0"
              />
              <label htmlFor="waitlist-email" className="sr-only">
                Tu correo electrónico
              </label>
              <Input
                id="waitlist-email"
                type="email"
                name="email"
                placeholder="tu@email.com"
                autoComplete="email"
                required
                aria-describedby="waitlist-hint"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status !== "idle" && status !== "loading") setStatus("idle")
                }}
                disabled={status === "loading" || status === "success"}
                className="h-12 rounded-xl border-foreground/20 bg-card shadow-sm placeholder:text-muted-foreground/50"
              />
              <ShimmerButton
                className="h-12 w-full px-6 text-sm font-semibold sm:w-auto"
                shimmerColor="var(--primary-foreground)"
                background="var(--primary)"
                disabled={status === "loading" || status === "success"}
              >
                <span className="flex items-center gap-2 text-primary-foreground">
                  {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
                  {status === "success" && <Check className="h-4 w-4" />}
                  {status === "success" ? "Listo" : "Unirme"}
                  {status === "idle" && <ArrowRight className="h-4 w-4" />}
                </span>
              </ShimmerButton>
            </form>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            {message ? (
              <p
                role="status"
                aria-live="polite"
                className={`mt-4 text-sm ${status === "error" ? "text-[var(--destructive)]" : "text-primary"}`}
              >
                {message}
              </p>
            ) : (
              <p id="waitlist-hint" className="mt-4 text-xs text-muted-foreground/60">
                Sin spam. Un aviso, cuando lancemos en Santiago.
              </p>
            )}
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
