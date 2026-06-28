import fs from "node:fs"
import path from "node:path"
import { Metadata } from "next"
import { LegalDocument } from "@/components/legal-document"

export const metadata: Metadata = {
  title: { absolute: "Política de Privacidad — GoBikeUp" },
  description:
    "Política de Privacidad de GoBikeUp: qué datos personales recolectamos, para qué los usamos, con quién los compartimos y cómo ejercer tus derechos. App de navegación ciclista para Santiago de Chile.",
  alternates: {
    canonical: "https://www.gobikeup.cl/privacidad",
  },
}

export default function PrivacidadPage() {
  const content = fs.readFileSync(
    path.join(process.cwd(), "content/legal/privacidad.md"),
    "utf-8"
  )
  return <LegalDocument content={content} />
}
