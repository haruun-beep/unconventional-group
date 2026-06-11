import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RexChat from "@/components/RexChat";
import StructuredData from "@/components/StructuredData";
import IntroLoader from "@/components/IntroLoader";
import MotionProvider from "@/components/MotionProvider";

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

const SITE = "https://www.unconventionalgroup.ca";
const DESCRIPTION =
  "Edmonton-based marketing & sales team. Websites, social media, video, ad management, lead generation, funnels & CRO, AI visibility and e-commerce growth for businesses across Canada. We're a team, not an agency.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Unconventional Group | Edmonton Marketing & Sales Team",
  description: DESCRIPTION,
  applicationName: "Unconventional Group",
  keywords: [
    "Edmonton marketing",
    "Edmonton web design",
    "marketing agency Edmonton",
    "social media management Edmonton",
    "Facebook ads management",
    "lead generation Edmonton",
    "AI visibility",
    "AEO",
    "GEO",
    "conversion rate optimization",
    "ecommerce marketing",
    "contractor marketing",
    "Alberta marketing",
  ],
  authors: [{ name: "Unconventional Group" }],
  creator: "Unconventional Group",
  publisher: "Unconventional Group",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE,
    siteName: "Unconventional Group",
    title: "Unconventional Group | Edmonton Marketing & Sales Team",
    description: DESCRIPTION,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Unconventional Group — We build brands that win online." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unconventional Group | Edmonton Marketing & Sales Team",
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="bg-bg text-white font-body antialiased overflow-x-hidden">
        {/* Pre-hydration splash cover — painted in the initial HTML so the page
            never flashes before the React intro loader mounts. Removed instantly
            for returning visitors (intro already seen this session). */}
        <div id="ug-splash-cover" />
        <noscript>
          <style>{`#ug-splash-cover{display:none}`}</style>
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(sessionStorage.getItem('ug-intro-seen')==='1'){var e=document.getElementById('ug-splash-cover');if(e)e.style.display='none';}}catch(e){}setTimeout(function(){var c=document.getElementById('ug-splash-cover');if(c)c.style.display='none';},6000);",
          }}
        />
        <StructuredData />
        <IntroLoader />
        <MotionProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <RexChat />
        </MotionProvider>
      </body>
    </html>
  );
}
