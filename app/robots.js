// robots.txt for search engine crawlers.
// Next.js serves this automatically at /robots.txt.
const BASE_URL = "https://chashmaexpres.in";

// Required for static export (output: export) — emits a static /robots.txt.
export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
