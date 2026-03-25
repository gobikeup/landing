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
      name: "GoBikeUp",
      url: "https://www.gobikeup.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.gobikeup.com/logo.svg",
      },
      description:
        "Plataforma de movilidad ciclista para Santiago de Chile. Navegacion por ciclovias reales, SOS emergencia, alertas comunitarias y talleres.",
      areaServed: {
        "@type": "City",
        name: "Santiago",
        containedInPlace: {
          "@type": "Country",
          name: "Chile",
        },
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "contacto@gobikeup.com",
        contactType: "customer support",
        availableLanguage: "Spanish",
      },
      sameAs: ["https://www.instagram.com/gobikeup/"],
    },
    {
      "@type": "MobileApplication",
      name: "GoBikeUp",
      url: "https://www.gobikeup.com",
      operatingSystem: "iOS, Android",
      applicationCategory: "TravelApplication",
      description:
        "App de navegacion ciclista para Santiago de Chile con rutas por ciclovias reales, boton SOS de emergencia, alertas comunitarias en tiempo real y marketplace de talleres.",
      featureList:
        "Navegacion por ciclovias reales, SOS emergencia en 3 segundos, Alertas comunitarias en tiempo real, Directorio de talleres de bicicleta, Marketplace de servicios ciclistas",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "CLP",
        availability: "https://schema.org/PreOrder",
      },
      inLanguage: "es",
    },
    {
      "@type": "WebSite",
      name: "GoBikeUp",
      url: "https://www.gobikeup.com",
      description:
        "Landing page de GoBikeUp, la app de navegacion ciclista para Santiago de Chile.",
      inLanguage: "es",
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
      <Navbar />
      <main>
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
