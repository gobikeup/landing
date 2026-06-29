"use client"

import { Printer } from "lucide-react"

/**
 * Botón para imprimir o guardar como PDF el documento legal. Hace explícita y
 * accesible la posibilidad de almacenar/imprimir el contrato de adhesión, en
 * línea con la Ley N° 19.496. Se oculta en la propia impresión (clase no-print).
 */
export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <Printer className="h-4 w-4" />
      Imprimir / Guardar PDF
    </button>
  )
}
