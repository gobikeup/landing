import fs from "node:fs"
import path from "node:path"
import { Metadata } from "next"
import { LegalDocument } from "@/components/legal-document"

export const metadata: Metadata = {
  title: { absolute: "Términos de Servicio — GoBikeUp" },
  description:
    "Términos de Servicio de GoBikeUp: condiciones de uso de la app, aviso sobre el SOS de emergencia, contenido del usuario, responsabilidad y tus derechos como consumidor. App ciclista para Santiago de Chile.",
  alternates: {
    canonical: "https://www.gobikeup.cl/terminos",
  },
}

export default function TerminosPage() {
  const content = fs.readFileSync(
    path.join(process.cwd(), "content/legal/terminos.md"),
    "utf-8"
  )
  return <LegalDocument content={content} />
}
