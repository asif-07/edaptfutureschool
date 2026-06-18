"use client";

import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { SITE } from "@/lib/site";

/**
 * Final call-to-action band with a big gradient glow.
 * Scarcity message + Apply Now + tap-to-call phone number.
 */
export function FinalCTA() {
  return (
    <section className="grain relative overflow-hidden bg-ink py-24 sm:py-32">
      {/* Gradient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[60vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-glow blur-2xl"
        aria-hidden="true"
      />
      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <p className="eyebrow mb-5">Limited seats</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-display font-bold text-white">
            Only {SITE.seatsPerStream} seats per stream.{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">Secure yours.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Magnetic className="w-full sm:w-auto">
              <a href="#enquiry" className="btn-gradient w-full sm:w-auto">
                Apply Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto" strength={0.25}>
              <a href={`tel:${SITE.phoneRaw}`} className="btn-outline w-full sm:w-auto" aria-label={`Call ${SITE.phoneDisplay}`}>
                <Phone className="h-4 w-4" aria-hidden="true" /> {SITE.phoneDisplay}
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
