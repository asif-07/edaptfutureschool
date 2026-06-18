/**
 * Tiny className joiner. Keeps conditional class logic readable without
 * pulling in extra dependencies (clsx/tailwind-merge) for a single-page site.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
