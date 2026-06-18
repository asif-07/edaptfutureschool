"use client";

import { motion } from "framer-motion";
import { MessageSquare, MapPin, FileCheck, GraduationCap, type LucideIcon } from "lucide-react";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/Reveal";

const STEPS: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: MessageSquare, title: "Enquire", desc: "Message us on WhatsApp or call. We will get back to you quickly." },
  { icon: MapPin, title: "Visit Campus", desc: "Come see the campus at Inkel City and meet the team." },
  { icon: FileCheck, title: "Confirm Admission", desc: "Pick your stream and complete the admission with our help." },
  { icon: GraduationCap, title: "Start Class", desc: "Join your batch and get going." },
];

/**
 * Admissions process as a numbered timeline.
 * Horizontal with a connecting line on desktop, vertical on mobile.
 */
export function Admissions() {
  return (
    <section id="admissions" className="grain relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="container-x relative z-10">
        <Reveal>
          <p className="eyebrow mb-4">
            <span className="font-mono text-white/40">06</span> / Admissions
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-display font-bold text-white">
            Four steps to your seat.
          </h2>
        </Reveal>

        <RevealGroup className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Connecting line (desktop) — draws itself in on scroll */}
          <motion.div
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px origin-left bg-gradient-to-r from-transparent via-electric/50 to-transparent lg:block"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />

          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <RevealItem key={title}>
              <div className="relative flex flex-col">
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <span className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-ink text-electric shadow-[0_0_0_6px_rgba(10,10,11,1)]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-display text-4xl font-bold text-white/10 lg:mt-4 lg:text-5xl">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">{desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
