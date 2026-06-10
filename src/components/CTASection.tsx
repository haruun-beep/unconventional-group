import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const DEFAULT_BG =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80";

interface Props {
  headline?: string;
  subhead?: string;
  buttonText?: string;
  bgUrl?: string;
}

export default function CTASection({
  headline = "WE'RE ONLY TAKING A FEW NEW CLIENTS THIS MONTH.",
  subhead = "Free 20-minute call. No pitch. We look at your business and tell you exactly what we'd do.",
  buttonText = "Book a Free Call",
  bgUrl = DEFAULT_BG,
}: Props) {
  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      style={{
        backgroundImage: `url('${bgUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(57,255,20,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <AnimateOnScroll>
          <div className="w-12 h-[3px] bg-neon mx-auto mb-8 glow-line" />
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[0.95]">
            {headline}
          </h2>
          <p className="text-white/55 text-lg mb-10 max-w-xl mx-auto leading-relaxed">{subhead}</p>
          <Link
            href="/book"
            className="inline-block bg-neon text-bg font-bold px-10 py-4 rounded text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            {buttonText}
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
