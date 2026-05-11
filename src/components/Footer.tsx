import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Websites", href: "/websites" },
  { label: "Social Media", href: "/social-media" },
  { label: "Videography", href: "/videography" },
  { label: "Our Work", href: "/our-work" },
  { label: "About", href: "/about" },
  { label: "Book a Call", href: "/book" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <Image
                src="/logo.svg"
                alt="Unconventional Group"
                width={52}
                height={52}
                className="h-13 w-13 transition-all group-hover:drop-shadow-[0_0_8px_#39FF14]"
              />
              <div>
                <p className="font-display text-base tracking-[0.2em] text-white leading-none group-hover:text-neon transition-colors">
                  UNCONVENTIONAL
                </p>
                <p className="font-display text-base tracking-[0.2em] text-neon leading-none">
                  GROUP
                </p>
              </div>
            </Link>
            <p className="text-white/60 text-sm mt-4 leading-relaxed max-w-xs">
              Edmonton-based creative agency. Websites, social media, and video for businesses across Canada.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-display text-xs tracking-[0.3em] text-white/40 mb-4">PAGES</p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display text-xs tracking-[0.3em] text-white/40 mb-4">CONTACT</p>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@unconventionalgroup.ca" className="text-sm text-white/60 hover:text-neon transition-colors">
                hello@unconventionalgroup.ca
              </a>
              <a href="tel:5879376948" className="text-sm text-white/60 hover:text-white transition-colors">
                587-937-6948
              </a>
              <p className="text-sm text-white/60">Edmonton, AB</p>
              <a
                href="https://bespokeautomations.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neon hover:underline mt-2 inline-flex items-center gap-1"
              >
                Bespoke Automations ↗
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Unconventional Group Inc. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">Edmonton, AB · Canada-Wide</p>
        </div>
      </div>
    </footer>
  );
}
