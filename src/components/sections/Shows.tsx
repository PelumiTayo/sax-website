import Link from "next/link";
import { shows, type Show } from "@/content/shows";

/**
 * Live-dates ticker. A slim, navbar-height strip that scrolls the shows
 * horizontally, each tagged "Upcoming" or "Past". Reads `shows` from content
 * and splits by date; the "today" boundary is resolved at build time, so a
 * redeploy is what moves a show from Upcoming to Past.
 *
 * The scroll is a pure-CSS marquee (see `.marquee-track` in globals.css):
 * two identical copies of the sequence slide left as one for a seamless loop,
 * pausing on hover and stopping entirely for reduced-motion users.
 */

// Parse at local noon so the ISO date never slips a day across time zones.
function toDate(iso: string) {
  return new Date(`${iso}T12:00:00`);
}

function formatDate(iso: string) {
  return toDate(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function place(show: Show) {
  return [show.venue, show.city].filter(Boolean).join(", ");
}

type Item = { key: string; status: "upcoming" | "past" | "note"; node: React.ReactNode };

function StatusTag({ status }: { status: "upcoming" | "past" }) {
  if (status === "upcoming") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-brass-soft">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass/70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brass" />
        </span>
        Upcoming
      </span>
    );
  }
  return (
    <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ivory/35">
      Past
    </span>
  );
}

function showNode(show: Show, status: "upcoming" | "past") {
  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap text-sm">
      <StatusTag status={status} />
      <span className="font-medium text-ivory">{show.title}</span>
      <span className="text-ivory/45">
        {formatDate(show.date)} · {place(show)}
      </span>
    </span>
  );
}

function Separator() {
  return (
    <span aria-hidden className="mx-6 text-brass/40 sm:mx-8">
      ◆
    </span>
  );
}

// One copy of the full item sequence, rendered with trailing separators so the
// loop seam keeps even spacing. The duplicate is hidden from assistive tech.
function Sequence({ items, hidden }: { items: Item[]; hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((item) => (
        <span key={item.key} className="flex items-center">
          {item.node}
          <Separator />
        </span>
      ))}
    </div>
  );
}

export function Shows() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isUpcoming = (s: Show) => toDate(s.date) >= today;

  const upcoming = shows
    .filter(isUpcoming)
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = shows
    .filter((s) => !isUpcoming(s))
    .sort((a, b) => b.date.localeCompare(a.date));

  const items: Item[] = [
    ...upcoming.map<Item>((s) => ({
      key: `up-${s.date}-${s.title}`,
      status: "upcoming",
      node: showNode(s, "upcoming"),
    })),
    ...past.map<Item>((s) => ({
      key: `past-${s.date}-${s.title}`,
      status: "past",
      node: showNode(s, "past"),
    })),
  ];

  // Nothing scheduled yet: keep the ticker alive with a couple of gentle notes.
  if (items.length === 0) {
    items.push(
      {
        key: "note-1",
        status: "note",
        node: (
          <span className="inline-flex items-center gap-2.5 whitespace-nowrap text-sm text-ivory/55">
            <span className="h-1.5 w-1.5 rounded-full bg-ivory/30" />
            No dates announced yet, new shows drop here first.
          </span>
        ),
      },
      {
        key: "note-2",
        status: "note",
        node: (
          <span className="whitespace-nowrap text-sm text-ivory/55">
            Want live saxophone at your event? Let&apos;s talk.
          </span>
        ),
      },
    );
  }

  // Slower scroll when there is more to read.
  const duration = Math.max(28, items.length * 9);

  return (
    <section className="flex items-center border-t border-ivory/10 bg-espresso text-ivory">
      <span className="shrink-0 whitespace-nowrap border-r border-ivory/10 py-3.5 pl-6 pr-5 text-xs font-medium uppercase tracking-[0.2em] text-brass-soft">
        Live dates
      </span>

      <div className="marquee-pause relative flex-1 overflow-hidden py-3.5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-espresso to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-espresso to-transparent" />
        <div
          className="marquee-track"
          style={{ ["--marquee-duration" as string]: `${duration}s` }}
        >
          <Sequence items={items} />
          <Sequence items={items} hidden />
        </div>
      </div>

      <Link
        href="/bookings"
        className="shrink-0 whitespace-nowrap border-l border-ivory/10 py-3.5 pl-5 pr-6 text-xs font-medium uppercase tracking-[0.14em] text-ivory/70 transition-colors hover:text-brass-soft"
      >
        Book me →
      </Link>
    </section>
  );
}
