// Contrato del formulario de /empresas — el canal por el que una empresa
// interesada nos deja sus datos desde el newsletter.
//
// Vive aparte del componente y del handler porque los dos validan lo mismo: el
// formulario para mostrar el error al tiro, el servidor porque lo que llega del
// cliente es untrusted input y puede no haber pasado nunca por el formulario.

export const HEADCOUNT_OPTIONS = [
  { value: "1-10", label: "1 a 10 personas" },
  { value: "11-50", label: "11 a 50 personas" },
  { value: "51-200", label: "51 a 200 personas" },
  { value: "201-500", label: "201 a 500 personas" },
  { value: "500+", label: "Más de 500 personas" },
] as const

export type Headcount = (typeof HEADCOUNT_OPTIONS)[number]["value"]

const HEADCOUNT_VALUES = HEADCOUNT_OPTIONS.map((o) => o.value) as readonly string[]

export function headcountLabel(value: Headcount): string {
  return HEADCOUNT_OPTIONS.find((o) => o.value === value)?.label ?? value
}

export interface Lead {
  name: string
  phone: string
  email: string
  company: string
  role: string
  headcount: Headcount
  /** Opcional: lo que la persona quiera contarnos. Puede venir vacío. */
  message: string
  /** Autorización para contactarla. Sin esto no hay envío. */
  consent: true
  /** Autorización SEPARADA para novedades. Marketing directo es otra finalidad
   *  que la del contacto, así que no puede colgar de la misma casilla. */
  newsletter: boolean
}

export type LeadErrors = Partial<Record<keyof Lead, string>>

export type LeadValidation =
  | { ok: true; data: Lead }
  | { ok: false; errors: LeadErrors }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[0-9+()\s.-]+$/

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : ""
}

/**
 * Deja el teléfono en un formato que se pueda tocar para llamar desde el correo.
 *
 * Chile marca +56 9 XXXX XXXX y la gente lo escribe de todas las formas
 * posibles: con el 9 y sin él, con +56, con espacios, con guiones. Cuando el
 * número calza con un móvil chileno lo normalizamos; cuando no —un fijo, un
 * número extranjero— se devuelve tal cual lo escribieron, porque adivinar un
 * formato equivocado es peor que respetar el original.
 */
export function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "")
  const mobile =
    digits.length === 9 && digits.startsWith("9")
      ? digits
      : digits.length === 11 && digits.startsWith("569")
        ? digits.slice(2)
        : digits.length === 8
          ? `9${digits}`
          : null

  if (!mobile) return raw.trim()
  return `+56 ${mobile.slice(0, 1)} ${mobile.slice(1, 5)} ${mobile.slice(5)}`
}

/**
 * Valida el formulario completo y devuelve TODOS los errores de una, no el
 * primero: quien manda el formulario con tres campos malos merece verlos los
 * tres, no descubrirlos de a uno.
 */
export function validateLead(raw: unknown): LeadValidation {
  const input = (raw ?? {}) as Record<string, unknown>
  const errors: LeadErrors = {}

  const name = asString(input.name)
  if (name.length < 2) errors.name = "Escribe tu nombre."
  else if (name.length > 80) errors.name = "El nombre es demasiado largo."

  const phone = asString(input.phone)
  const phoneDigits = phone.replace(/\D/g, "")
  if (phone.length === 0) errors.phone = "Escribe tu teléfono."
  else if (!PHONE_RE.test(phone)) errors.phone = "El teléfono solo puede tener números."
  else if (phoneDigits.length < 8) errors.phone = "Faltan dígitos en el teléfono."
  else if (phoneDigits.length > 15) errors.phone = "El teléfono tiene demasiados dígitos."

  const email = asString(input.email).toLowerCase()
  if (email.length === 0) errors.email = "Escribe tu correo."
  else if (email.length > 254 || !EMAIL_RE.test(email))
    errors.email = "Ese correo no parece válido."

  const company = asString(input.company)
  if (company.length < 2) errors.company = "Escribe el nombre de tu empresa."
  else if (company.length > 120) errors.company = "El nombre es demasiado largo."

  const role = asString(input.role)
  if (role.length < 2) errors.role = "Escribe tu cargo."
  else if (role.length > 80) errors.role = "El cargo es demasiado largo."

  const headcount = asString(input.headcount)
  if (headcount.length === 0) errors.headcount = "Elige un tramo."
  else if (!HEADCOUNT_VALUES.includes(headcount))
    errors.headcount = "Elige uno de los tramos de la lista."

  const message = asString(input.message)
  if (message.length > 500) errors.message = "Máximo 500 caracteres."

  if (input.consent !== true)
    errors.consent = "Necesitamos tu autorización para poder contactarte."

  if (Object.keys(errors).length > 0) return { ok: false, errors }

  return {
    ok: true,
    data: {
      name,
      phone: normalizePhone(phone),
      email,
      company,
      role,
      headcount: headcount as Headcount,
      message,
      consent: true,
      newsletter: input.newsletter === true,
    },
  }
}
