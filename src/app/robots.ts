import type { MetadataRoute } from "next";

const SITE = "https://www.unconventionalgroup.ca";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Everyone — including AI answer engines (GPTBot, ClaudeBot, PerplexityBot,
      // Google-Extended, etc.) — is explicitly welcome to crawl. We WANT to be
      // cited by AI search.
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
