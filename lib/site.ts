/**
 * Single source of truth for all institution content.
 * Keeping copy/contact details here guarantees accuracy across components.
 * Update values in ONE place to change them site-wide.
 */

export const SITE = {
  name: "Edapt Future School",
  shortName: "EDAPT FUTURE SCHOOL",
  affiliation: "SCOLE Kerala enrolled",
  tagline: "The School Built for the AI Generation",
  description:
    "Plus One admissions open at Edapt Future School — a SCOLE Kerala enrolled institution at Inkel City, Malappuram. Learn. Create. Earn. Connect.",
  url: "https://edaptfutureschool.com",
  websiteLabel: "edaptfutureschool.com",
  // Phone is displayed with a space for readability; tel: links use the raw number.
  phoneDisplay: "9072 616200",
  phoneRaw: "9072616200",
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
    name: "Computer Science",
    code: "Code 05",
    icon: "Cpu",
    subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    blurb: "A science-forward path for builders, engineers and problem-solvers.",
  },
  {
    id: "computer-application",
    name: "Computer Application",
    code: "Code 39",
    icon: "Briefcase",
    subjects: ["Business Studies", "Accountancy", "Economics", "Computer Application"],
    blurb: "A commerce-meets-tech path for entrepreneurs and future founders.",
  },
] as const;

export type StreamId = (typeof STREAMS)[number]["id"];
