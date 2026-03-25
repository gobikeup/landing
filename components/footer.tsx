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
    { label: "Terminos", href: "/terminos" },
  ],
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground">
      {/* Green glow rising from below — city lights */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,var(--primary)_0%,transparent_60%)] opacity-[0.15]" />

      {/* DotPattern — pavement texture, denser at bottom */}
      <DotPattern
        className="absolute inset-0 text-background/[0.06] [mask-image:linear-gradient(to_bottom,transparent_20%,white_80%)]"
        cr={0.8}
        width={20}
        height={20}
      />

      {/* Top edge — gradient fade from page to footer */}
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-primary/20" />

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
              <span className="text-base font-bold text-background">
                GoBikeUp
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-background/50">
              Navegación ciclista para Santiago. Ciclovías reales, SOS
              integrado, comunidad.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-3 text-sm font-semibold text-background/70">
                {category}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="block py-1 text-sm text-background/40 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-background/10 pt-6">
          <p className="text-center text-xs text-background/30">
            &copy; 2026 GoBikeUp. Santiago, Chile.
          </p>
        </div>
      </div>
    </footer>
  )
}
