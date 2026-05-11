import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Our Work — Unconventional Group",
  description:
    "Portfolio of website, social media, and video work from Unconventional Group. 50+ businesses across Canada.",
};

export default function OurWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface pt-32 pb-24 px-6 overflow-hidden">
        {/* Dark city background placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-surface" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <AnimateOnScroll>
            <h1 className="font-display text-7xl md:text-9xl text-white leading-tight">
              VIEW OUR{" "}
              <span className="text-neon glow relative inline-block">
                WORK
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8 C 40 2, 80 12, 120 6 C 160 0, 180 10, 198 4"
                    stroke="#39FF14"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="bg-bg py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <PortfolioGrid />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-12">
              WHAT CLIENTS SAY
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "CLIENT NAME",
                company: "Company Name",
                quote: "Add a portfolio-page testimonial here. Short and punchy.",
              },
              {
                name: "CLIENT NAME",
                company: "Company Name",
                quote: "Add a portfolio-page testimonial here. Short and punchy.",
              },
              {
                name: "CLIENT NAME",
                company: "Company Name",
                quote: "Add a portfolio-page testimonial here. Short and punchy.",
              },
            ].map((t, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <TestimonialCard {...t} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="LIKE WHAT YOU SEE? LET'S BUILD YOURS." />
    </>
  );
}
