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
  title: "Unconventional Group — Websites, Social Media & Video",
  description:
    "Edmonton-based creative agency. Custom websites, social media management, and video production for businesses across Canada.",
  openGraph: {
    title: "Unconventional Group",
    description: "Websites, social media, and video — done right.",
    siteName: "Unconventional Group",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="bg-bg text-white font-body antialiased overflow-x-hidden">
        <Nav />
        <main>{children}</main>
        <Footer />
        <RexChat />
      </body>
    </html>
  );
}
