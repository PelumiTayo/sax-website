/**
 * Live performances. Add a show once, and the landing-page "Live dates"
 * section automatically sorts it into Upcoming (date today or later) or Past,
 * and moves it over as the date passes.
 *
 * ▸ `date` must be ISO "YYYY-MM-DD".
 * ▸ `ticketUrl` is optional, add it to show a "Tickets & details" link.
 *
 * Real events only, never invent dates or venues.
 *
 * Example:
 *   {
 *     date: "2026-11-14",
 *     title: "Afrobeats Night",
 *     venue: "The Crocodile",
 *     city: "Seattle, WA",
 *     ticketUrl: "https://...",
 *   },
 */

export type Show = {
  date: string; // ISO "YYYY-MM-DD"
  title: string;
  venue: string;
  city: string;
  ticketUrl?: string;
};

export const shows: Show[] = [
  {
    date: "2026-10-04",
    title: "Music + Comedy",
    venue: "DaGrooveEnt",
    city: "Niles, IL",
  },
  {
    date: "2026-11-14",
    title: "AfroLiveJamsSessions",
    venue: "",
    city: "Seattle, WA",
  },
  {
    date: "2026-09-26",
    title: "Choma Fest",
    venue: "",
    city: "Seattle, WA",
  },
  {
    date: "2026-09-11",
    title: "AfroLiveJamsSessions",
    venue: "Fremont Fridays",
    city: "Seattle, WA",
  },
];
