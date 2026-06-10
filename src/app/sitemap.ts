import type { MetadataRoute } from "next";

const SITE = "https://www.unconventionalgroup.ca";

// Bump a route's date only when its content actually changes — search
// engines learn to distrust sitemaps where everything "changed" daily.
const LAUNCH = new Date("2026-06-09");

type Route = {
  path: string;
  priority: number;
  freq: MetadataRoute.Sitemap[number]["changeFrequency"];
  modified?: Date;
};

const routes: Route[] = [
  { path: "/", priority: 1.0, freq: "weekly" },
  { path: "/websites", priority: 0.9, freq: "monthly" },
  { path: "/social-media", priority: 0.9, freq: "monthly" },
  { path: "/videography", priority: 0.9, freq: "monthly" },
  { path: "/ad-management", priority: 0.9, freq: "monthly" },
  { path: "/lead-generation", priority: 0.9, freq: "monthly" },
  { path: "/funnels-cro", priority: 0.9, freq: "monthly" },
  { path: "/ai-visibility", priority: 0.9, freq: "monthly" },
  { path: "/ecommerce", priority: 0.9, freq: "monthly" },
  { path: "/industries/contractors", priority: 0.8, freq: "monthly" },
  { path: "/industries/professional-services", priority: 0.8, freq: "monthly" },
  { path: "/industries/home-services", priority: 0.8, freq: "monthly" },
  { path: "/industries/restaurants", priority: 0.8, freq: "monthly" },
  { path: "/industries/real-estate", priority: 0.8, freq: "monthly" },
{ path: "/insights", priority: 0.7, freq: "weekly" },
  { path: "/insights/how-much-does-a-website-cost-in-edmonton", priority: 0.7, freq: "yearly" },
  { path: "/insights/facebook-ads-for-contractors-alberta", priority: 0.7, freq: "yearly" },
  { path: "/insights/ai-visibility-aeo-geo-guide", priority: 0.7, freq: "yearly" },
  { path: "/our-work", priority: 0.7, freq: "monthly" },
  { path: "/about", priority: 0.6, freq: "monthly" },
  { path: "/subsidiaries", priority: 0.5, freq: "monthly" },
  { path: "/book", priority: 0.8, freq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified: r.modified ?? LAUNCH,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
