const SITE = "https://www.unconventionalgroup.ca";

const services = [
  { name: "Website Design & Development", url: `${SITE}/websites` },
  { name: "Social Media Management", url: `${SITE}/social-media` },
  { name: "Videography & Photography", url: `${SITE}/videography` },
  { name: "Facebook & Instagram Ad Management", url: `${SITE}/ad-management` },
  { name: "Lead Generation", url: `${SITE}/lead-generation` },
  { name: "Funnels & Conversion Optimization", url: `${SITE}/funnels-cro` },
  { name: "AI Visibility (AEO / GEO)", url: `${SITE}/ai-visibility` },
  { name: "E-Commerce Growth", url: `${SITE}/ecommerce` },
];

const organization = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE}/#organization`,
  name: "Unconventional Group",
  alternateName: "UGroup",
  url: SITE,
  logo: `${SITE}/logo.png`,
  image: `${SITE}/og.jpg`,
  description:
    "Edmonton-based marketing & sales team. Websites, social media, videography, ad management, lead generation, funnels & CRO, AI visibility, and e-commerce growth for businesses across Canada.",
  email: "hello@unconventionalgroup.ca",
  telephone: "+1-587-937-6948",
  founder: { "@type": "Person", name: "Haruun Ali" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Edmonton",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "City", name: "Edmonton" },
    { "@type": "AdministrativeArea", name: "Alberta" },
    { "@type": "Country", name: "Canada" },
  ],
  knowsAbout: [
    "Web design",
    "Social media marketing",
    "Videography",
    "Facebook and Instagram advertising",
    "Lead generation",
    "Conversion rate optimization",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "E-commerce marketing",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Marketing & Sales Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: s.url },
    })),
  },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: "Unconventional Group",
  publisher: { "@id": `${SITE}/#organization` },
  inLanguage: "en-CA",
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
