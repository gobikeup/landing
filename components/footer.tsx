import { Bike } from "lucide-react"
import { DotPattern } from "@/components/ui/dot-pattern"

const footerLinks = {
  Producto: [
    { label: "Features", href: "#features" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Waitlist", href: "#descargar" },
  ],
  Contacto: [
    { label: "contacto@gobikeup.com", href: "mailto:contacto@gobikeup.com" },
    { label: "Privacidad", href: "/privacidad" },
  ],
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--footer-bg)] border-t border-border">

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <a
              href="#"
              className="flex items-center gap-2"
              aria-label="GoBikeUp — Inicio"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
                <Bike className="h-4 w-4 text-primary" />
              </div>
              <span className="text-base font-bold text-[var(--footer-text)]">
                GoBikeUp
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--footer-text)]/50">
              Navegación ciclista para Santiago. Ciclovías reales, SOS
              integrado, comunidad.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-3 text-sm font-semibold text-[var(--footer-text)]/70">
                {category}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="block py-1 text-sm text-[var(--footer-text)]/40 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[var(--footer-text)]/10 pt-6">
          <p className="text-center text-xs text-[var(--footer-text)]/30">
            &copy; 2026 GoBikeUp. Santiago, Chile.
          </p>
        </div>
      </div>
    </footer>
  )
}
