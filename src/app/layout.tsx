import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RexChat from "@/components/RexChat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unconventionalgroup.ca"),
  title: "Unconventional Group — Websites, Social Media & Video",
  description:
    "Edmonton-based creative agency. Custom websites, social media management, and video production for businesses across Canada.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Unconventional Group",
    description: "Websites, social media, and video — done right.",
    siteName: "Unconventional Group",
    url: "https://unconventionalgroup.ca",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unconventional Group — Websites, Social Media & Video",
    description: "Websites, social media, and video — done right.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://unconventionalgroup.ca/#organization",
      name: "Unconventional Group",
      url: "https://unconventionalgroup.ca",
      logo: "https://unconventionalgroup.ca/logo.jpg",
      description:
        "Edmonton-based creative agency offering custom websites, social media management, video production, and ad management for businesses across Canada.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Edmonton",
        addressRegion: "AB",
        addressCountry: "CA",
      },
      areaServed: "Canada",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Creative Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design & Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Videography & Photography" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facebook & Instagram Ad Management" } },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-white font-body antialiased overflow-x-hidden">
        <Nav />
        <main>{children}</main>
        <Footer />
        <RexChat />
      </body>
    </html>
  );
}
