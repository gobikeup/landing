import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gobikeup.com"),
  title: {
    default: "GoBikeUp — Ciclovías y Rutas Ciclistas en Santiago",
    template: "%s | GoBikeUp",
  },
  description:
    "La app para navegar Santiago en bicicleta por ciclovías reales. Rutas ciclistas, botón SOS de emergencia, alertas comunitarias y talleres cerca de ti. Únete gratis.",
  keywords: [
    "ciclovías Santiago",
    "app ciclista Santiago",
    "rutas bicicleta Santiago",
    "navegación ciclista",
    "mapa ciclovías Santiago",
    "talleres bicicleta Santiago",
    "app para ciclistas",
    "GoBikeUp",
    "pedalea tranquilo",
    "seguridad ciclista Santiago",
  ],
  authors: [{ name: "GoBikeUp" }],
  creator: "GoBikeUp",
  alternates: {
    canonical: "https://www.gobikeup.com",
    languages: {
      "es-CL": "https://www.gobikeup.com",
      "x-default": "https://www.gobikeup.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large" as const,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "GoBikeUp — App ciclista para Santiago de Chile",
    description:
      "Navega Santiago en bicicleta por ciclovías reales. Rutas ciclistas, botón SOS, alertas comunitarias y talleres cerca de ti.",
    type: "website",
    locale: "es_CL",
    url: "https://www.gobikeup.com",
    siteName: "GoBikeUp",
  },
  twitter: {
    card: "summary_large_image",
    site: "@gobikeup",
    creator: "@gobikeup",
    title: "GoBikeUp — App ciclista para Santiago de Chile",
    description:
      "Navega Santiago en bicicleta por ciclovías reales. Rutas ciclistas, botón SOS, alertas comunitarias y talleres cerca de ti.",
  },
  other: {
    "geo.region": "CL-RM",
    "geo.placename": "Santiago, Chile",
    "geo.position": "-33.4489;-70.6693",
    ICBM: "-33.4489, -70.6693",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CL" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
