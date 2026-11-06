import { Metadata } from "next"
import { LegalDocument } from "@/components/legal-document"
import { readLegalContent } from "@/lib/legal-content"

export const metadata: Metadata = {
  title: { absolute: "Política de Privacidad, versión 0.5.1 (anterior) — GoBikeUp" },
  description:
    "Versión 0.5.1 de la Política de Privacidad de GoBikeUp, del 5 de noviembre de 2026. Ya no está vigente: la versión actual está en gobikeup.cl/privacidad.",
  alternates: {
    canonical: "https://www.gobikeup.cl/privacidad/v0-5-1",
  },
  robots: { index: false, follow: true },
}

// `privacidad-v0.5.1.md` es la copia exacta de lo que se publicó, y no se edita.
// El aviso de versión anterior se agrega aquí, al renderizar.
const VERSION_LINE = "**Versión 0.5.1**\n"
const AVISO =
  "> **Esta versión ya no está vigente.** Es la versión 0.5.1 de la Política de Privacidad, que rigió desde el 5 de noviembre de 2026 hasta el **6 de noviembre de 2026**. La versión vigente está en [gobikeup.cl/privacidad](/privacidad).\n"

export default function PrivacidadV051Page() {
  const content = readLegalContent("privacidad-v0.5.1.md")
  if (!content.includes(VERSION_LINE)) {
    throw new Error("privacidad-v0.5.1.md: no se encontró la línea de versión")
  }
  return (
    <LegalDocument
      content={content.replace(VERSION_LINE, `${VERSION_LINE}\n${AVISO}`)}
    />
  )
}
