import { Phone, Globe, Instagram, Facebook, Youtube } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

/**
 * Dark, minimal footer.
 * Wordmark, quick links, contact, social placeholders, copyright.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-white/10 bg-ink py-16">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Wordmark + about */}
          <div>
            <span className="font-display text-base font-bold tracking-[0.18em] text-white">
              EDAPT <span className="text-electric">FUTURE</span> SCHOOL
            </span>
            <p className="mt-4 max-w-xs text-sm text-white/55">
              The school built for the AI generation. {SITE.identity}.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Explore</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-white/65 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-electric" aria-hidden="true" /> {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://${SITE.websiteLabel}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/65 transition-colors hover:text-white"
                >
                  <Globe className="h-4 w-4 text-electric" aria-hidden="true" /> {SITE.websiteLabel}
                </a>
              </li>
              <li className="text-white/55">{SITE.campus.full}</li>
            </ul>

            {/* Social placeholders — replace href="#" with real profile URLs. */}
            <div className="mt-5 flex items-center gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`${SITE.name} on ${label}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-electric/50 hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 hairline" />
        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-white/45 sm:flex-row">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>Inkel City, Malappuram, Kerala.</p>
        </div>
      </div>
    </footer>
  );
}
