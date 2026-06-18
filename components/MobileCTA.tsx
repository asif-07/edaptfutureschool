"use client";

import { Phone, Send } from "lucide-react";
import { SITE } from "@/lib/site";

/**
 * Floating sticky action bar for mobile only.
 * Always-accessible "Call" + "Apply Now" so a lead is one tap away.
 * Hidden on lg+ where the navbar CTAs are persistent.
 */
export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 px-4 py-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/25 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
          aria-label={`Call ${SITE.phoneDisplay}`}
        >
          <Phone className="h-4 w-4" aria-hidden="true" /> Call
        </a>
        <a
          href="#enquiry"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-gradient py-3 text-sm font-bold text-white shadow-[0_8px_30px_-8px_rgba(15,95,224,0.6)]"
        >
          <Send className="h-4 w-4" aria-hidden="true" /> Apply Now
        </a>
      </div>
    </div>
  );
}
