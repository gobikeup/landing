import { Metadata } from "next"
import { LegalDocument } from "@/components/legal-document"
import { readLegalContent } from "@/lib/legal-content"

export const metadata: Metadata = {
  title: { absolute: "Política de Privacidad — GoBikeUp" },
  description:
    "Política de Privacidad de GoBikeUp: qué datos personales recolectamos, para qué los usamos, con quién los compartimos y cómo ejercer tus derechos. App de navegación ciclista para Santiago de Chile.",
  alternates: {
    canonical: "https://www.gobikeup.cl/privacidad",
  },
}

export default function PrivacidadPage() {
  return <LegalDocument content={readLegalContent("privacidad.md")} />
}
