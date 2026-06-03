// Sitemap for search engines (Google Search Console, Bing, etc.).
// Next.js serves this automatically at /sitemap.xml.
const BASE_URL = "https://chashmaexpres.in";

// Required for static export (output: export) — emits a static /sitemap.xml.
export const dynamic = "force-static";

// Static, build-time date so the sitemap output stays deterministic.
const lastModified = "2026-06-03";

export default function sitemap() {
  const routes = ["", "/collection", "/about", "/contact"];

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
