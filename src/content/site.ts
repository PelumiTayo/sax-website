/**
 * Central site configuration. Edit these values to update the site.
 */

export const site = {
  // ── Identity ──────────────────────────────────────────────────────────
  // The brand name shown in the logo, hero and page titles.
  artistName: "LumiTunes",
  // Legal / real name, used in the story and in SEO structured data.
  realName: "Pelumi Tayo Orisadare",
  role: "Saxophonist",
  // The distinctive one-liner used in the hero.
  tagline: "Live saxophone that lights up the room.",

  // Where booking inquiries should reach you.
  email: "pelumi.lumitunes@gmail.com",
  // Optional public phone. Leave empty ("") to hide it.
  phone: "",
  // Where you're based and available from.
  location: "Seattle, Washington",

  // Canonical site URL (used for SEO / social sharing).
  url: "https://www.pelumisax.com",

  // ── Booking form (Web3Forms) ──────────────────────────────────────────
  // Inquiries are emailed to you via Web3Forms (https://web3forms.com) — free,
  // no account. To turn it on:
  //   1. Go to https://web3forms.com, enter the email above, and copy the
  //      "Access Key" they send you.
  //   2. Paste that key into `formAccessKey` below.
  // While the key is empty, the form runs in demo mode (shows success without
  // sending). The endpoint rarely needs changing.
  formEndpoint: "https://api.web3forms.com/submit",
  formAccessKey: "2402003f-260e-4c14-8cde-fd26210ad7d1", // Web3Forms access key
} as const;

/** Social platforms. Set `href` to your real profile; empty ones are hidden. */
export const socials = [
  { label: "Instagram", href: "https://instagram.com/Lumi__Tunes", handle: "@Lumi__Tunes" },
  { label: "TikTok", href: "https://www.tiktok.com/@Pelumiumi", handle: "@Pelumiumi" },
  // Add these once you find them:
  { label: "YouTube", href: "", handle: "" },
  { label: "Spotify", href: "", handle: "" },
] as const;

/** Primary navigation. Order is preserved. */
export const nav = [
  { label: "About", href: "/about" },
  { label: "Music", href: "/music" },
  { label: "Gallery", href: "/gallery" },
  { label: "Bookings", href: "/bookings" },
] as const;
