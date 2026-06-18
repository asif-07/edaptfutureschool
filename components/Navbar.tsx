"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Sticky glassmorphism navbar.
 * - Wordmark left, anchor links center/right, gradient "Apply Now" CTA.
 * - Collapses to an accessible hamburger drawer on mobile.
 * - Background intensifies once the user scrolls past the hero.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-white/10 bg-ink/80 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Primary">
        {/* Wordmark */}
        <a href="#top" className="group flex items-center gap-2" aria-label={`${SITE.name}, home`}>
          <span className="font-display text-sm font-bold tracking-[0.18em] text-white sm:text-base">
            EDAPT <span className="text-electric">FUTURE</span> SCHOOL
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            aria-label={`Call ${SITE.phoneDisplay}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SITE.phoneDisplay}
          </a>
          <a href="#enquiry" className="btn-gradient !px-5 !py-2.5 text-sm">
            Apply Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-drawer"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        className={cn(
          "overflow-hidden border-t border-white/10 bg-ink/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[80vh]" : "max-h-0"
        )}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex flex-col gap-3 px-1">
            <a
              href={`tel:${SITE.phoneRaw}`}
              onClick={() => setOpen(false)}
              className="btn-outline w-full"
              aria-label={`Call ${SITE.phoneDisplay}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> {SITE.phoneDisplay}
            </a>
            <a href="#enquiry" onClick={() => setOpen(false)} className="btn-gradient w-full">
              Apply Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
