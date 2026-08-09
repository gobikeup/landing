"use client"

import { useState } from "react"
import { ArrowRight, Check, ChevronDown, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { HEADCOUNT_OPTIONS, validateLead, type LeadErrors } from "@/lib/empresas"

type Status = "idle" | "loading" | "success" | "error"

const EMPTY = {
  name: "",
  phone: "",
  email: "",
  company: "",
  role: "",
  headcount: "",
  message: "",
}

/** El orden en que se enfoca el primer campo con error: el mismo en que están
 *  en pantalla, para que el salto nunca vaya hacia atrás. */
const FIELD_ORDER = [
  "name",
  "role",
  "company",
  "headcount",
  "email",
  "phone",
  "message",
  "consent",
] as const

function Field({
  id,
  label,
  error,
  hint,
  children,
}: {
  id: string
  label: string
  error?: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      ) : null}
    </div>
  )
}

export function LeadForm() {
  const [values, setValues] = useState(EMPTY)
  const [consent, setConsent] = useState(false)
  const [newsletter, setNewsletter] = useState(false)
  const [errors, setErrors] = useState<LeadErrors>({})
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState("")

  function update(field: keyof typeof EMPTY, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
    if (status === "error") setStatus("idle")
  }

  function focusFirstError(found: LeadErrors) {
    const first = FIELD_ORDER.find((field) => found[field])
    if (first) document.getElementById(first)?.focus()
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "loading") return

    const form = e.currentTarget
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement)?.value
    const payload = { ...values, consent, newsletter, website: honeypot }

    // Se valida acá primero para que el error salga sin esperar la red. El
    // servidor vuelve a validar igual: esto es comodidad, no seguridad.
    const local = validateLead(payload)
    if (!local.ok) {
      setErrors(local.errors)
      focusFirstError(local.errors)
      return
    }

    setStatus("loading")
    setErrors({})

    try {
      const res = await fetch("/api/empresas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await res.json()

      if (!res.ok) {
        setStatus("error")
        setMessage(data.error ?? "Algo salió mal. Intenta de nuevo.")
        if (data.fields) {
          setErrors(data.fields)
          focusFirstError(data.fields)
        }
        return
      }

      setStatus("success")
      setMessage(data.message)
    } catch {
      setStatus("error")
      setMessage("No pudimos enviar tus datos. Revisa tu conexión e intenta de nuevo.")
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card px-6 py-12 text-center"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-5 w-5 text-primary" />
        </div>
        <h2 className="text-xl font-semibold text-foreground">{message}</h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          Te mandamos un correo de confirmación a{" "}
          <span className="font-medium text-foreground">{values.email}</span>. Si necesitas
          corregir algo, respóndelo y lo vemos.
        </p>
      </div>
    )
  }

  const inputProps = (field: keyof typeof EMPTY) => ({
    id: field,
    name: field,
    value: values[field],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => update(field, e.target.value),
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
    className: "h-11 rounded-lg bg-card",
  })

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Trampa antibots — invisible para personas, irresistible para scripts */}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <Field id="name" label="Nombre" error={errors.name}>
        <Input {...inputProps("name")} autoComplete="name" placeholder="Tu nombre y apellido" />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="role" label="Cargo" error={errors.role}>
          <Input
            {...inputProps("role")}
            autoComplete="organization-title"
            placeholder="Jefe de operaciones"
          />
        </Field>

        <Field id="company" label="Empresa" error={errors.company}>
          <Input
            {...inputProps("company")}
            autoComplete="organization"
            placeholder="Nombre de la empresa"
          />
        </Field>
      </div>

      <Field id="headcount" label="Cantidad de colaboradores" error={errors.headcount}>
        <div className="relative">
          <select
            id="headcount"
            name="headcount"
            value={values.headcount}
            onChange={(e) => update("headcount", e.target.value)}
            aria-invalid={Boolean(errors.headcount)}
            aria-describedby={errors.headcount ? "headcount-error" : undefined}
            className="h-11 w-full appearance-none rounded-lg border border-input bg-card px-3 text-base text-foreground shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm"
          >
            <option value="">Selecciona un tramo</option>
            {HEADCOUNT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </div>
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="email" label="Correo" error={errors.email}>
          <Input
            {...inputProps("email")}
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="tu@empresa.cl"
          />
        </Field>

        <Field id="phone" label="Teléfono" error={errors.phone}>
          <Input
            {...inputProps("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+56 9 1234 5678"
          />
        </Field>
      </div>

      <Field
        id="message"
        label="¿Algo que quieras contarnos?"
        error={errors.message}
        hint="Opcional. Cuántos pedalean, qué necesitan, lo que sea útil."
      >
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          rows={3}
          maxLength={500}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          className="w-full resize-none rounded-lg border border-input bg-card px-3 py-2.5 text-base text-foreground shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm"
          placeholder="Tenemos 40 personas que llegan en bici y queremos apoyarlas mejor."
        />
      </Field>

      <div className="mt-2 flex flex-col gap-3 rounded-lg border border-border bg-muted/40 p-4">
        <label htmlFor="consent" className="flex cursor-pointer items-start gap-3 text-sm">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked)
              if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }))
            }}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
          />
          <span className="text-muted-foreground">
            Autorizo a GoBike SpA a usar estos datos para{" "}
            <span className="text-foreground">contactarme sobre GoBikeUp para empresas</span>.
            Puedes revisar el detalle en{" "}
            <a href="#datos" className="text-primary underline underline-offset-2">
              cómo usamos tus datos
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" role="alert" className="text-xs text-destructive">
            {errors.consent}
          </p>
        )}

        <label htmlFor="newsletter" className="flex cursor-pointer items-start gap-3 text-sm">
          <input
            id="newsletter"
            name="newsletter"
            type="checkbox"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
          />
          <span className="text-muted-foreground">
            También quiero recibir novedades de GoBikeUp.{" "}
            <span className="text-muted-foreground/70">Opcional, y lo puedes revocar cuando quieras.</span>
          </span>
        </label>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="mt-2 h-12 w-full rounded-lg text-sm font-semibold"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando
          </>
        ) : (
          <>
            Quiero saber más
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>

      {status === "error" && (
        <p role="alert" className="text-center text-sm text-destructive">
          {message}
        </p>
      )}
    </form>
  )
}
