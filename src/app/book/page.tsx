import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Book a Free Call — Unconventional Group",
  description:
    "Free 20-minute call. No pitch. We look at your business and tell you exactly what we'd do.",
};

export default function BookPage() {
  return (
    <section className="bg-bg min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h1 className="font-display text-6xl md:text-8xl text-white leading-tight mb-4">
              LET&apos;S TALK ABOUT YOUR BUSINESS.
            </h1>
            <p className="text-white/60 text-lg">
              Free 20-minute call. No pitch. We look at what you&apos;ve got and tell you exactly what
              we&apos;d do.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Calendly embed placeholder */}
        <AnimateOnScroll delay={0.2}>
          <div className="bg-surface border border-white/10 rounded-2xl overflow-hidden" style={{ minHeight: "600px" }}>
            {/*
              Replace this div with your Calendly inline embed.
              Example:
              <div
                className="calendly-inline-widget w-full"
                data-url="https://calendly.com/YOUR_LINK"
                style={{ minWidth: "320px", height: "700px" }}
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="afterInteractive"
              />
            */}
            <div className="flex items-center justify-center h-[600px] text-center px-8">
              <div>
                <p className="font-display text-3xl text-neon mb-4">CALENDLY EMBED</p>
                <p className="text-white/50 text-sm max-w-sm">
                  Drop your Calendly link in{" "}
                  <code className="text-neon bg-bg/50 px-1 py-0.5 rounded text-xs">
                    src/app/book/page.tsx
                  </code>{" "}
                  to activate the booking widget.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
