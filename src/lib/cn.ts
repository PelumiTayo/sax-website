/** Tiny className joiner, filters out falsy values. No extra deps. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
