/**
 * El logo de GoBikeUp — el mismo del favicon (`app/icon.svg`) y de
 * `public/logo.svg`, que sigue ahí para los metadatos de la marca.
 *
 * Va inline y no como imagen porque son 300 bytes de geometría: ahorra una
 * petición y evita el parpadeo del logo apareciendo después del texto.
 *
 * Los colores van fijos a propósito, y es la única excepción a la regla de usar
 * solo tokens del tema: un logo que cambia de color con el modo oscuro deja de
 * ser el logo.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      role="img"
      aria-label="GoBikeUp"
      className={className}
      focusable="false"
    >
      <rect width="32" height="32" rx="7" fill="#16a34a" />
      <circle cx="16" cy="16" r="9.5" fill="none" stroke="white" strokeWidth="2.5" />
      <path
        d="M11.5 19L16 13.5L20.5 19"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
