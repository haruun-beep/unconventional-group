import { MetadataRoute } from "next";

const base = "https://unconventionalgroup.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/websites`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/social-media`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/videography`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ad-management`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/book`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/our-work`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
