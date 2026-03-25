@AGENTS.md

# Landing Page — www.gobikeup.com

## Que es esto

Landing promocional de GoBikeUp, la app de navegacion ciclista para Santiago de Chile. "Pedalea tranquilo." Sitio estatico, sin backend. Estetica Apple/Linear/Arc — NO template SaaS generico.

## Stack

- **Next.js 16** (Turbopack) — leer `node_modules/next/dist/docs/` ante dudas de API
- **Tailwind v4** — sintaxis v4 (`@import "tailwindcss"`, `@theme inline`), NO v3
- **shadcn/ui** (New York) — componentes base en `components/ui/`
- **Magic UI** — globe, shimmer-button, number-ticker, text-animate, marquee, bento-grid (instalados via shadcn registry, viven en `components/ui/`)
- **motion** (framer-motion) — scroll-triggered reveals, spring physics
- **cobe** v2 — globo terraqueo (API: `createGlobe` + `globe.update()`, NO `onRender`)
- **next-themes** — dark mode via CSS variables
- **Inter** — unica font (400, 500, 600, 700) via `next/font/google`
- **lucide-react** — unicos iconos permitidos

## Estructura

```
app/layout.tsx       — Inter font, ThemeProvider, metadata SEO
app/page.tsx         — importa las 8 secciones
app/globals.css      — tema OKLCH + Tailwind v4 + animaciones
components/          — navbar, hero, problem, features, how-it-works, stats, cta, footer, theme-provider
components/ui/       — shadcn + Magic UI (auto-generated, editar con cuidado)
lib/utils.ts         — cn() helper
```

## Secciones (8)

Navbar (sticky glass blur) > Hero (heading + globe) > Problem (3 pain points) > Features (bento 2+3) > How it works (3 pasos) > Stats (number tickers) > CTA (waitlist email) > Footer

## Reglas de colores — CRITICO

SOLO colores del tema via CSS variables: `bg-background`, `text-foreground`, `bg-primary`, `text-muted-foreground`, `border-border`, etc. Opacidades OK (`bg-primary/10`).

PROHIBIDO: cualquier color default de Tailwind (`red-`, `blue-`, `gray-`, `zinc-`, `slate-`, `neutral-`, `stone-`, `text-white`, `bg-black`, etc.). Tolerancia cero.

## Reglas de diseno

- Dark mode via CSS variables (next-themes + clase `.dark`). NO usar `dark:` prefix de Tailwind en componentes custom.
- Spacing generoso: secciones `py-24 lg:py-32`, gaps `gap-8 lg:gap-12`
- Color budget: 90% neutro + 1 acento primary verde
- Responsive mobile-first (375px a 1440px), container `max-w-6xl`
- Animaciones con proposito (scroll reveals, spring), NO decorativas

## Prohibido

- Colores Tailwind default, gradientes morados/cyan, neon, Material Design
- FontAwesome, Material Icons, Heroicons (solo lucide-react)
- Emojis en UI, interfaces densas, parallax sin proposito
- Features AI, social, multi-ciudad, pagos, tracking deportivo

## Comandos

```bash
npm run dev          # desarrollo
npm run build        # DEBE compilar sin errores
```
