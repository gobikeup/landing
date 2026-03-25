import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.gobikeup.com/#organization",
      name: "GoBikeUp",
      url: "https://www.gobikeup.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://www.gobikeup.com/#logo",
        url: "https://www.gobikeup.com/logo.svg",
        contentUrl: "https://www.gobikeup.com/logo.svg",
        width: 512,
        height: 512,
      },
      description:
        "Plataforma de movilidad ciclista para Santiago de Chile. Navegación por ciclovías reales, SOS emergencia, alertas comunitarias y talleres.",
      areaServed: {
        "@type": "City",
        name: "Santiago",
        sameAs: "https://www.wikidata.org/wiki/Q2887",
        containedInPlace: {
          "@type": "Country",
          name: "Chile",
        },
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -33.4489,
        longitude: -70.6693,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressRegion: "Región Metropolitana",
        addressCountry: "CL",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "contacto@gobikeup.com",
        contactType: "customer service",
        availableLanguage: {
          "@type": "Language",
          name: "Spanish",
        },
      },
      sameAs: ["https://www.instagram.com/gobikeup/"],
    },
    {
      "@type": "MobileApplication",
      "@id": "https://www.gobikeup.com/#app",
      name: "GoBikeUp",
      url: "https://www.gobikeup.com",
      operatingSystem: "iOS, Android",
      applicationCategory: "TravelApplication",
      description:
        "App de navegación ciclista para Santiago de Chile con rutas por ciclovías reales, botón SOS de emergencia, alertas comunitarias en tiempo real y marketplace de talleres.",
      featureList: [
        "Navegación por ciclovías reales",
        "SOS emergencia en 3 segundos",
        "Alertas comunitarias en tiempo real",
        "Directorio de talleres de bicicleta",
        "Marketplace de servicios ciclistas",
      ],
      author: { "@id": "https://www.gobikeup.com/#organization" },
      publisher: { "@id": "https://www.gobikeup.com/#organization" },
      inLanguage: "es-CL",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "CLP",
        availability: "https://schema.org/PreOrder",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.gobikeup.com/#website",
      name: "GoBikeUp",
      url: "https://www.gobikeup.com",
      description:
        "Landing page de GoBikeUp, la app de navegación ciclista para Santiago de Chile.",
      inLanguage: "es-CL",
      publisher: { "@id": "https://www.gobikeup.com/#organization" },
      mainEntity: { "@id": "https://www.gobikeup.com/#app" },
    },
    {
      "@type": "HowTo",
      "@id": "https://www.gobikeup.com/#how-it-works",
      name: "Cómo usar GoBikeUp para navegar en bicicleta por Santiago",
      description:
        "Sin tutoriales, sin crear cuenta, sin configurar nada. Así de simple.",
      inLanguage: "es-CL",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Abre la app",
          text: "El mapa carga con tu posición y la red de ciclovías de Santiago. Sin login obligatorio, sin setup.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Elige tu destino",
          text: "Busca una dirección y recibe la ruta óptima por ciclovías reales de Santiago.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Pedalea tranquilo",
          text: "Navegación turn-by-turn, alertas en tiempo real y SOS siempre disponible.",
        },
      ],
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:text-sm focus:font-medium"
      >
        Saltar al contenido
      </a>
      <header>
        <Navbar />
      </header>
      <main id="main-content">
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
