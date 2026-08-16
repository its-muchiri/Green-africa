import Link from "next/link";
import { siteConfig } from "@/data/site";
import { SectionDivider } from "@/components/ui";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: "/about", label: "Our Story" },
      { href: "/about#team", label: "Team" },
      { href: "/about#timeline", label: "Timeline" },
      { href: "/journal", label: "Field Notes" },
    ],
    services: [
      { href: "/services", label: "All Services" },
      { href: "/services?category=seedlings", label: "Tree & Fruit Seedlings" },
      { href: "/services?category=irrigation", label: "Irrigation Systems" },
      { href: "/services?category=structures", label: "Greenhouses & Shade Nets" },
      { href: "/services?category=water-storage", label: "Dam Liners & Tanks" },
      { href: "/services?category=soil-health", label: "Soil Testing & Compost" },
      { href: "/services?category=training", label: "Farmer Training" },
      { href: "/services?category=design", label: "Kitchen Garden Design" },
    ],
    connect: [
      { href: "/projects", label: "Projects" },
      { href: "/contact", label: "Get a Quote" },
      { href: `https://wa.me/${siteConfig.whatsapp}`, label: "WhatsApp Us", external: true },
    ],
  };

  const socialLinks = [
    { href: siteConfig.social.facebook, label: "Facebook", icon: "facebook" },
    { href: siteConfig.social.twitter, label: "Twitter", icon: "twitter" },
    { href: siteConfig.social.instagram, label: "Instagram", icon: "instagram" },
    { href: siteConfig.social.linkedin, label: "LinkedIn", icon: "linkedin" },
    { href: siteConfig.social.youtube, label: "YouTube", icon: "youtube" },
  ];

  return (
    <footer className="bg-forest text-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 brutalist-border px-3 py-2 mb-6 inline-block" aria-label="Green Africa Agri Solutions - Home">
              <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight-display">
                GA
              </span>
              <span className="font-mono text-xs uppercase tracking-widest">
                Agri Solutions
              </span>
            </Link>
            <p className="text-sage max-w-xs mb-8 line-height-snug">
              Climate-smart agricultural products and services for farmers, schools, NGOs, and county governments across Kenya.
            </p>
            <address className="not-italic text-sage font-mono text-xs leading-relaxed max-w-xs">
              <div className="font-display font-medium text-cream text-sm mb-2">Visit Us</div>
              {siteConfig.address.street}<br />
              {siteConfig.address.city}, {siteConfig.address.postalCode}<br />
              {siteConfig.address.country}
            </address>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4 tracking-tight-display">Company</h4>
            <nav aria-label="Company links">
              <ul className="space-y-3 font-mono text-xs uppercase tracking-wider">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sage hover:text-clay transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4 tracking-tight-display">Services</h4>
            <nav aria-label="Service links">
              <ul className="space-y-2 font-mono text-xs uppercase tracking-wider">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sage hover:text-clay transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4 tracking-tight-display">Connect</h4>
            <nav aria-label="Contact links">
              <ul className="space-y-3 font-mono text-xs uppercase tracking-wider">
                {footerLinks.connect.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sage hover:text-clay transition-colors flex items-center gap-2"
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                      {link.external && (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="font-display font-medium text-sm mb-2">Hours</div>
              <ul className="font-mono text-xs text-sage space-y-1">
                <li>Mon–Fri: {siteConfig.hours.weekdays}</li>
                <li>Sat: {siteConfig.hours.saturday}</li>
                <li>Sun: {siteConfig.hours.sunday}</li>
              </ul>
            </div>
          </div>
        </div>

        <SectionDivider variant="dark" className="my-12" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-sage">
            © {currentYear} Green Africa Agri Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.email}
              className="font-mono text-xs text-sage hover:text-clay transition-colors"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="font-mono text-xs text-sage hover:text-clay transition-colors"
            >
              {siteConfig.phone}
            </a>
            <div className="flex items-center gap-4" aria-label="Social links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage hover:text-clay transition-colors"
                  aria-label={social.label}
                >
                  {social.icon === "facebook" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  )}
                  {social.icon === "twitter" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" />
                    </svg>
                  )}
                  {social.icon === "linkedin" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                  {social.icon === "youtube" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 4.5a3 3 0 0 0-3-3h-14a3 3 0 0 0-3 3v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-15z" />
                      <path d="M9 12l6 4.5-6 4.5V12z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}