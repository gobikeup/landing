import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.gobikeup.com",
      lastModified: "2026-03-24",
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
