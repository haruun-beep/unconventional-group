import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";

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

        <AnimateOnScroll delay={0.2}>
          <ContactForm />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
