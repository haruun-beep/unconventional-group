import type { Metadata } from "next";
import Script from "next/script";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  alternates: { canonical: "/book" },
  title: "Book a Free Call — Unconventional Group",
  description:
    "Free 20-minute call. No pitch. We look at your business and tell you exactly what we'd do. Or send us a message.",
};

const CALENDLY_URL =
  "https://calendly.com/haruun-unconventionalgroup/ugroup-discovery-call" +
  "?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=39ff14";

export default function BookPage() {
  return (
    <section className="bg-bg min-h-screen pt-44 md:pt-56 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="font-display text-xs text-neon tracking-[0.35em] mb-4">BOOK A CALL</p>
            <h1 className="font-display text-6xl md:text-8xl text-white leading-[0.95] mb-4">
              LET&apos;S TALK ABOUT YOUR BUSINESS.
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Free 20-minute call. No pitch. We look at what you&apos;ve got and tell you exactly
              what we&apos;d do.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Calendly inline embed */}
        <AnimateOnScroll delay={0.15}>
          <div className="bg-surface border border-white/10 rounded-2xl overflow-hidden">
            <div
              className="calendly-inline-widget"
              data-url={CALENDLY_URL}
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </AnimateOnScroll>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />

        {/* Divider */}
        <AnimateOnScroll>
          <div className="flex items-center gap-4 my-16">
            <div className="flex-1 h-px bg-white/10" />
            <p className="font-display text-sm text-white/40 tracking-[0.2em] whitespace-nowrap">
              OR SEND US A MESSAGE
            </p>
            <div className="flex-1 h-px bg-white/10" />
          </div>
        </AnimateOnScroll>

        {/* Contact form */}
        <AnimateOnScroll delay={0.1}>
          <ContactForm />
          <p className="text-white/35 text-sm text-center mt-6">
            Prefer email? Reach us at{" "}
            <a href="mailto:hello@unconventionalgroup.ca" className="text-neon hover:underline">
              hello@unconventionalgroup.ca
            </a>{" "}
            · 587-937-6948
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
