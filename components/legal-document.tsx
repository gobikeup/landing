import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"

/**
 * Renderiza un documento legal escrito en Markdown (con tablas GFM) como una
 * página legible, responsiva y con la tipografía del sitio.
 *
 * El contenido vive en `content/legal/*.md` y se inyecta como string desde un
 * Server Component, de modo que el render ocurre en build (SSG).
 */
export function LegalDocument({ content }: { content: string }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al inicio
      </Link>
      <article
        className="
          prose prose-neutral max-w-none text-foreground
          prose-headings:text-foreground prose-headings:scroll-mt-24
          prose-p:text-muted-foreground
          prose-li:text-muted-foreground
          prose-strong:text-foreground
          prose-em:text-muted-foreground
          prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:font-normal prose-blockquote:not-italic
          prose-table:text-sm
          prose-th:text-foreground
          prose-td:text-muted-foreground prose-td:align-top
        "
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeSlug]}
          components={{
            // Las tablas legales son anchas: permitir scroll horizontal en
            // móvil en lugar de romper el layout.
            table: ({ node, ...props }) => (
              <div className="my-6 w-full overflow-x-auto [&>table]:my-0">
                <table {...props} />
              </div>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </main>
  )
}
