import Link from "next/link";

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
            <Link href="/" className="font-display text-2xl tracking-widest text-white hover:text-neon transition-colors">
              UNCONVENTIONAL<span className="text-neon">.</span>
            </Link>
            <p className="text-muted text-sm mt-3 leading-relaxed">
              Edmonton-based creative agency serving businesses across Canada.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-display text-sm tracking-widest text-muted mb-4">PAGES</p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display text-sm tracking-widest text-muted mb-4">CONTACT</p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@unconventionalgroup.ca"
                className="text-sm text-muted hover:text-neon transition-colors"
              >
                hello@unconventionalgroup.ca
              </a>
              <a
                href="tel:5879376948"
                className="text-sm text-muted hover:text-white transition-colors"
              >
                587-937-6948
              </a>
              <p className="text-sm text-muted">Edmonton, AB</p>
              <a
                href="https://bespokeautomations.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neon hover:underline mt-2"
              >
                Bespoke Automations ↗
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} Unconventional Group Inc. All rights reserved.
          </p>
          <p className="text-muted text-xs">Edmonton, AB · Canada-Wide</p>
        </div>
      </div>
    </footer>
  );
}
