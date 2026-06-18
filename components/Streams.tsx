"use client";

import { ArrowRight, Briefcase, Cpu, Check } from "lucide-react";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/Reveal";
import { STREAMS, SITE } from "@/lib/site";

// Map of icon names declared in lib/site.ts to Lucide components.
const ICONS = { Cpu, Briefcase } as const;

/**
 * The core offering: two large glassmorphism stream cards.
 * Side-by-side on desktop, stacked on mobile. Each card has a code badge,
 * subject list, a seats tag and a hover glow.
 */
export function Streams() {
  return (
    <section id="streams" className="relative bg-white py-24 text-ink sm:py-32">
      <div className="container-x">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-electric">
            <span className="font-mono text-ink/40">02</span> / Choose Your Stream
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-display font-bold text-ink">
            Two Plus One streams, built for what&apos;s next.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {STREAMS.map((stream) => {
            const Icon = ICONS[stream.icon as keyof typeof ICONS];
            return (
              <RevealItem key={stream.id}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-ink p-8 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(15,95,224,0.55)] sm:p-10">
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-glow opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient">
                      <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-white/80">
                      {stream.code}
                    </span>
                  </div>

                  <h3 className="relative z-10 mt-6 font-display text-2xl font-bold sm:text-3xl">{stream.name}</h3>
                  <p className="relative z-10 mt-2 text-sm text-white/60">{stream.blurb}</p>

                  <ul className="relative z-10 mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {stream.subjects.map((subject) => (
                      <li key={subject} className="flex items-center gap-2 text-sm text-white/85">
                        <Check className="h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
                        {subject}
                      </li>
                    ))}
                  </ul>

                  <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="rounded-full bg-electric/15 px-3 py-1 text-xs font-semibold text-electric">
                      {SITE.seatsPerStream} seats
                    </span>
                    <a
                      href="#enquiry"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-electric"
                      aria-label={`Apply for ${stream.name}`}
                    >
                      Apply <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
