import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
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
    default: "GoBikeUp — App de navegacion ciclista en Santiago",
    template: "%s | GoBikeUp",
  },
  description:
    "Navega Santiago en bicicleta con rutas por ciclovias reales, boton SOS de emergencia, alertas comunitarias en tiempo real y talleres cerca de ti.",
  keywords: [
    "ciclovias Santiago",
    "app ciclista Chile",
    "rutas bicicleta Santiago",
    "navegacion ciclista",
    "SOS bicicleta",
    "talleres bicicleta Santiago",
    "GoBikeUp",
    "pedalea tranquilo",
    "movilidad ciclista",
    "ciclovias Chile",
  ],
  authors: [{ name: "GoBikeUp" }],
  creator: "GoBikeUp",
  alternates: {
    canonical: "https://www.gobikeup.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "GoBikeUp — Pedalea tranquilo por Santiago",
    description:
      "La app de navegacion ciclista para Santiago. Rutas por ciclovias reales, SOS emergencia, alertas comunitarias y talleres cerca de ti.",
    type: "website",
    locale: "es_CL",
    url: "https://www.gobikeup.com",
    siteName: "GoBikeUp",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoBikeUp — Pedalea tranquilo por Santiago",
    description:
      "La app de navegacion ciclista para Santiago. Rutas por ciclovias reales, SOS emergencia, alertas comunitarias y talleres cerca de ti.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`} suppressHydrationWarning>
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
