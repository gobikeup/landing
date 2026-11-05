import fs from "node:fs"
import path from "node:path"

/**
 * Lee un documento de `content/legal/` y le quita los comentarios HTML.
 *
 * Los comentarios (`<!-- pendiente <ID> -->`) marcan puntos que esperan la
 * revisión legal y no deben llegar al sitio. Hay que quitarlos antes de
 * renderizar porque react-markdown, sin `rehype-raw`, muestra el HTML crudo
 * como texto visible.
 */
export function readLegalContent(file: string): string {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "content/legal", file),
    "utf-8"
  )
  return raw.replace(/<!--[\s\S]*?-->/g, "")
}
