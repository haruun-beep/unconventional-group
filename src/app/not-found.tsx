import Link from "next/link";

const links = [
  { label: "Websites", href: "/websites" },
  { label: "Social Media", href: "/social-media" },
  { label: "Videography", href: "/videography" },
  { label: "Ad Management", href: "/ad-management" },
  { label: "Our Work", href: "/our-work" },
  { label: "Insights", href: "/insights" },
];

export default function NotFound() {
  return (
    <section className="bg-bg min-h-[70vh] flex items-center px-6 py-28">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-display text-xs text-neon tracking-[0.35em] mb-4">404</p>
        <h1 className="font-display text-6xl md:text-8xl text-white leading-[0.93] mb-6">
          THIS PAGE DOESN&apos;T EXIST.
        </h1>
        <p className="text-white/60 text-lg leading-relaxed mb-10">
          The page you&apos;re looking for moved, changed, or never existed. The rest of the
          site is very real — here&apos;s where to go.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="bg-surface border border-white/8 rounded-full px-5 py-2 text-sm text-white/80 hover:border-neon/40 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="inline-block bg-neon text-black font-display text-lg tracking-wide px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          BACK TO HOME
        </Link>
      </div>
    </section>
  );
}
