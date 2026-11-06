import { Metadata } from "next"
import { LegalDocument } from "@/components/legal-document"
import { readLegalContent } from "@/lib/legal-content"

export const metadata: Metadata = {
  title: { absolute: "Bases de la promoción Bike Itaú — GoBikeUp" },
  description:
    "Bases de la promoción «1 mes gratis de Bike Itaú» de GoBikeUp: 300 cupos para cuentas nuevas, cómo se entrega el código, límites y tus derechos como consumidor (Ley N° 19.496).",
  alternates: {
    canonical: "https://www.gobikeup.cl/promociones/bike-itau",
  },
}

export default function BasesBikeItauPage() {
  return <LegalDocument content={readLegalContent("promociones/bike-itau.md")} />
}
