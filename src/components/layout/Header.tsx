"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, Logo } from "@/components";

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
        scrolled
          ? "glass-nav backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Green Africa Agri Solutions - Home"
          >
            <Logo variant="default" size="md" asChild />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative font-mono text-sm uppercase tracking-wider text-ink-muted hover:text-jungle-100 transition-colors after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-clay-500 after:transition-width hover:after:w-full"
              >
                <span className="text-sage-500 mr-2">{String(index + 1).padStart(2, "0")}</span>
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
            className="absolute inset-0 bg-jungle-900/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-0 right-0 bottom-0 w-full max-w-sm glass-card p-6 sm:p-8 m-4 mt-20 rounded-2xl border border-jungle-400/20">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center">
                <Logo variant="default" size="md" asChild />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-ink hover:text-clay-400 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 font-mono text-sm uppercase tracking-wider text-ink-muted hover:text-jungle-100 transition-colors py-3 px-4 glass rounded-lg"
                >
                  <span className="text-clay-500">{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              ))}
              <Button variant="primary" className="mt-4 w-full" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}