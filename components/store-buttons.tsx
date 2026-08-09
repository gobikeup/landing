"use client"

import { useId } from "react"

/** La app está publicada en las dos tiendas desde julio de 2026. */
export const STORE_LINKS = {
  ios: "https://apps.apple.com/cl/app/id6784488102",
  android: "https://play.google.com/store/apps/details?id=com.gobikeup.app",
} as const

/** La manzana es monocroma por definición de marca: hereda el color del botón
 *  para que funcione tanto sobre fondo oscuro como claro. */
function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  )
}

/**
 * El logo de Google Play: un pentágono partido en cuatro por sus diagonales,
 * cada sector con su propio degradado. Va con los colores de la marca y no con
 * los del tema — un logo que cambia de color deja de ser el logo.
 *
 * Los identificadores de los degradados se generan por instancia: el botón
 * aparece más de una vez en la misma página y dos `id` iguales en un documento
 * hacen que el segundo tome el degradado del primero.
 */
function GooglePlayLogo({ className }: { className?: string }) {
  const uid = useId()
  const g = (name: string) => `${uid}-${name}`

  return (
    <svg viewBox="0 0 440 512" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={g("azul")} x1="0" y1="0" x2="256" y2="512" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00A0FF" />
          <stop offset="1" stopColor="#00E3FF" />
        </linearGradient>
        <linearGradient id={g("verde")} x1="0" y1="0" x2="370" y2="256" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00E377" />
          <stop offset="1" stopColor="#00C554" />
        </linearGradient>
        <linearGradient id={g("ambar")} x1="256" y1="150" x2="440" y2="362" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFE000" />
          <stop offset="1" stopColor="#FF9C00" />
        </linearGradient>
        <linearGradient id={g("rojo")} x1="370" y1="256" x2="0" y2="512" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF3A44" />
          <stop offset="1" stopColor="#C31162" />
        </linearGradient>
      </defs>
      <path d="M0 0 L370 150 L256 256 Z" fill={`url(#${g("verde")})`} />
      <path d="M0 0 L256 256 L0 512 Z" fill={`url(#${g("azul")})`} />
      <path d="M370 150 L440 256 L370 362 L256 256 Z" fill={`url(#${g("ambar")})`} />
      <path d="M0 512 L370 362 L256 256 Z" fill={`url(#${g("rojo")})`} />
    </svg>
  )
}

function StoreButton({
  href,
  logo,
  eyebrow,
  name,
}: {
  href: string
  logo: React.ReactNode
  eyebrow: string
  name: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-3 rounded-xl bg-foreground px-5 py-2.5 text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      {logo}
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[11px] opacity-75">{eyebrow}</span>
        <span className="text-base font-semibold tracking-tight">{name}</span>
      </span>
    </a>
  )
}

/** Los dos botones de descarga. `className` deja alinearlos según la sección. */
export function StoreButtons({ className }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className ?? ""}`}>
      <StoreButton
        href={STORE_LINKS.ios}
        logo={<AppleLogo className="h-7 w-7" />}
        eyebrow="Descárgala en el"
        name="App Store"
      />
      <StoreButton
        href={STORE_LINKS.android}
        logo={<GooglePlayLogo className="h-6 w-6" />}
        eyebrow="Disponible en"
        name="Google Play"
      />
    </div>
  )
}
