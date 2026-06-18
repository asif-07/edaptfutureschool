/**
 * Single source of truth for all institution content.
 * Keeping copy/contact details here guarantees accuracy across components.
 * Update values in ONE place to change them site-wide.
 */

export const SITE = {
  name: "Edapt Future School",
  shortName: "EDAPT FUTURE SCHOOL",
  // A line about the school's own identity (no board/affiliation claims).
  identity: "A future-focused campus in Inkel City, Malappuram",
  tagline: "The School Built for the AI Generation",
  description:
    "Plus One admissions are open at Edapt Future School in Inkel City, Malappuram. Two streams, 30 seats each. Students learn with AI, work on real projects, and get the time to find what they are good at.",
  url: "https://edaptfutureschool.com",
  websiteLabel: "edaptfutureschool.com",
  // Phone is displayed with a space for readability; tel: links use the raw number.
  phoneDisplay: "9072 616200",
  phoneRaw: "9072616200",
  // WhatsApp number in full international format (no +, no spaces) for wa.me links.
  whatsappNumber: "919072616200",
  campus: {
    line1: "Edapt Campus, Inkel City",
    line2: "Malappuram, Kerala",
    full: "Edapt Campus, Inkel City, Malappuram, Kerala",
    // Embedded Google Maps query. Swap for a precise place embed when available.
    mapQuery: "Inkel City, Malappuram, Kerala",
  },
  seatsPerStream: 30,
} as const;

/** Anchor navigation targets used by both the navbar and smooth scroll. */
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Streams", href: "#streams" },
  { label: "Why Us", href: "#why" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
] as const;

/** The two Plus One streams offered. */
export const STREAMS = [
  {
    id: "computer-science",
    name: "Computer Science Stream",
    icon: "Cpu",
    subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    blurb: "For students who like maths, science and building things that work.",
  },
  {
    id: "computer-application",
    name: "Commerce with Computer Application",
    icon: "Briefcase",
    subjects: ["Business Studies", "Accountancy", "Economics", "Computer Application"],
    blurb: "For students drawn to business, money and practical computer skills.",
  },
] as const;

export type StreamId = (typeof STREAMS)[number]["id"];
