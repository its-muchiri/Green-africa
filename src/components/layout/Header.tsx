"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReededPanel } from "@/components/ui";
import { Button } from "@/components/ui";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/journal", label: "Field Notes" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled && "reeded-glass bg-cream/35 border-b border-white/40"
      )}
    >
      <nav className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 brutalist-border-forest px-3 py-2"
            aria-label="Green Africa Agri Solutions - Home"
          >
            <span className="font-display font-bold text-xl sm:text-2xl text-forest tracking-tight-display">
              GA
            </span>
            <span className="hidden sm:block font-mono text-xs uppercase tracking-widest text-forest">
              Agri Solutions
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative font-mono text-sm uppercase tracking-wider text-forest hover:text-clay transition-colors after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-clay after:transition-width hover:after:w-full"
              >
                <span className="text-sage mr-2">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
            <Button variant="primary" size="sm" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(true)}>
              Menu
            </Button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-ink/50"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <ReededPanel variant="dark" className="absolute top-0 right-0 bottom-0 w-full max-w-sm p-6 sm:p-8">
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                className="flex items-center gap-2 brutalist-border px-3 py-2"
              >
                <span className="font-display font-bold text-xl text-cream tracking-tight-display">
                  GA
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-sage">
                  Agri Solutions
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-cream hover:text-clay transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 font-mono text-sm uppercase tracking-wider text-sage hover:text-cream transition-colors py-2"
                >
                  <span className="text-clay">{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              ))}
              <Button variant="primary" className="mt-4 w-full" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </nav>
          </ReededPanel>
        </div>
      )}
    </header>
  );
}