import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

interface Props {
  headline?: string;
  subhead?: string;
  buttonText?: string;
}

export default function CTASection({
  headline = "WE'RE ONLY TAKING A FEW NEW CLIENTS THIS MONTH.",
  subhead = "Free 20-minute call. No pitch. We look at your business and tell you exactly what we'd do.",
  buttonText = "Book a Free Call",
}: Props) {
  return (
    <section className="bg-bg py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <AnimateOnScroll>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            {headline}
          </h2>
          <p className="text-muted text-lg mb-10">{subhead}</p>
          <Link
            href="/book"
            className="inline-block bg-neon text-bg font-bold px-10 py-4 rounded text-base hover:bg-neon-dim transition-colors"
          >
            {buttonText}
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
