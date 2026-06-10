import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { label: "Websites", href: "/websites" },
  { label: "Social Media", href: "/social-media" },
  { label: "Videography", href: "/videography" },
  { label: "Ad Management", href: "/ad-management" },
];

const growthLinks = [
  { label: "Lead Generation", href: "/lead-generation" },
  { label: "Funnels & CRO", href: "/funnels-cro" },
  { label: "AI Visibility", href: "/ai-visibility" },
  { label: "E-Commerce Growth", href: "/ecommerce" },
];

const industryLinks = [
  { label: "Contractors & Trades", href: "/industries/contractors" },
  { label: "Professional Services", href: "/industries/professional-services" },
  { label: "Home & Local Services", href: "/industries/home-services" },
  { label: "Restaurants", href: "/industries/restaurants" },
  { label: "Real Estate", href: "/industries/real-estate" },
];

const companyLinks = [
  { label: "Past Work", href: "/our-work" },
  { label: "Results", href: "/results" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Subsidiaries", href: "/subsidiaries" },
  { label: "Calgary", href: "/locations/calgary" },
  { label: "Book a Call", href: "/book" },
];

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="font-display text-xs tracking-[0.3em] text-white/40 mb-4">{title}</p>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-white/55 hover:text-neon transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand + contact */}
          <div className="col-span-2">
            <Link href="/" className="group flex items-center w-fit">
              <Image
                src="/logo.png"
                alt="Unconventional Group"
                width={320}
                height={320}
                className="h-28 w-28 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-white/50 text-sm mt-4 leading-relaxed max-w-xs">
              Edmonton-based marketing &amp; sales team. Everything in-house, for businesses across Canada.
            </p>
            <div className="flex flex-col gap-2 mt-5">
              <a href="mailto:hello@unconventionalgroup.ca" className="text-sm text-white/55 hover:text-neon transition-colors">
                hello@unconventionalgroup.ca
              </a>
              <a href="tel:5879376948" className="text-sm text-white/55 hover:text-white transition-colors">
                587-937-6948
              </a>
              <p className="text-sm text-white/55">Edmonton, AB · Canada-Wide</p>
            </div>
          </div>

          <Column title="SERVICES" links={serviceLinks} />
          <Column title="GROWTH" links={growthLinks} />
          <Column title="INDUSTRIES" links={industryLinks} />
          <Column title="COMPANY" links={companyLinks} />
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
