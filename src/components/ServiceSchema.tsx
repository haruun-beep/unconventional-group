const SITE = "https://www.unconventionalgroup.ca";

/**
 * Per-page Service + BreadcrumbList JSON-LD. The Organization node it
 * references lives in StructuredData.tsx (rendered in the root layout).
 */
export default function ServiceSchema({
  name,
  description,
  path,
  serviceType,
  breadcrumbs,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  breadcrumbs?: { name: string; path: string }[];
}) {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE}${path}#service`,
    name,
    description,
    url: `${SITE}${path}`,
    serviceType: serviceType ?? name,
    provider: { "@id": `${SITE}/#organization` },
    areaServed: [
      { "@type": "City", name: "Edmonton" },
      { "@type": "AdministrativeArea", name: "Alberta" },
      { "@type": "Country", name: "Canada" },
    ],
  };

  const crumbs = [{ name: "Home", path: "/" }, ...(breadcrumbs ?? []), { name, path }];
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE}${c.path}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
    </>
  );
}
