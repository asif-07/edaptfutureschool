"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Building2, Wifi, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/lib/site";

const HIGHLIGHTS = [
  { icon: Building2, text: "A modern campus at Inkel City" },
  { icon: Wifi, text: "Smart classrooms and fast internet" },
  { icon: Sparkles, text: "Space to build and work on projects" },
];

/**
 * Campus / location section.
 * Address block + highlights on one side, an embedded Google Map on the other.
 */
export function Campus() {
  // Google Maps embed via the public query endpoint — no API key required.
  // Swap `mapQuery` (or this whole src) for a precise place embed when ready.
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.campus.mapQuery)}&output=embed`;

  // Only mount the map iframe once it nears the viewport. This keeps Google
  // Maps' (heavy) network requests off the initial page load.
  const mapWrapRef = useRef<HTMLDivElement>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const el = mapWrapRef.current;
    if (!el || showMap) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShowMap(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [showMap]);

  return (
    <section id="campus" className="relative bg-white py-24 text-ink sm:py-32">
      <div className="container-x">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-electric">
            <span className="font-mono text-ink/40">05</span> / Campus
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal delay={0.05}>
              <h2 className="font-display text-display font-bold text-ink">
                A campus set up for hands-on learning.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 flex items-start gap-3 text-ink/70">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-electric" aria-hidden="true" />
                <address className="not-italic">
                  <span className="block font-semibold text-ink">{SITE.campus.line1}</span>
                  <span className="block">{SITE.campus.line2}</span>
                </address>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-8 space-y-3">
                {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-ink/75">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-electric/10 text-electric">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.campus.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40 hover:bg-ink/5"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" /> Get Directions
              </a>
            </Reveal>
          </div>

          {/* Map embed (lazy-mounted when it nears the viewport) */}
          <Reveal delay={0.1}>
            <div
              ref={mapWrapRef}
              className="overflow-hidden rounded-3xl border border-ink/10 shadow-xl"
            >
              {showMap ? (
                <iframe
                  title={`Map of ${SITE.campus.full}`}
                  src={mapSrc}
                  width="100%"
                  height="420"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[320px] w-full sm:h-[420px]"
                  allowFullScreen
                />
              ) : (
                <div
                  className="flex h-[320px] w-full items-center justify-center bg-ink/[0.03] text-ink/40 sm:h-[420px]"
                  aria-hidden="true"
                >
                  <MapPin className="h-8 w-8" />
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
