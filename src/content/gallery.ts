/**
 * Photography gallery.
 *
 * ▸ `src` is a path in /public (e.g. "/gallery/portrait-1.jpg"). While empty,
 *   a labeled placeholder describes the ideal shot.
 * ▸ `orientation` drives the editorial layout, mix portrait & landscape for
 *   the staggered look to sing.
 * ▸ `feature: true` gives an image extra size in the masonry-style grid.
 */

export type Orientation = "portrait" | "landscape" | "square";

export type Photo = {
  id: string;
  src?: string;
  alt: string; // meaningful alt text once the real photo is in
  note: string; // description of the shot to collect (shown while empty)
  orientation: Orientation;
  feature?: boolean;
};

const ALT = "Pelumi Tayo Orisadare, LumiTunes";

export const gallery: Photo[] = [
  {
    id: "g1",
    src: "/gallery/Hero.JPEG",
    alt: ALT,
    note: "Portrait.",
    orientation: "portrait",
  },
  {
    id: "g2",
    src: "/gallery/IMG_0498.jpg",
    alt: ALT,
    note: "Performance.",
    orientation: "landscape",
  },
  {
    id: "g3",
    src: "/gallery/944A15D8-7496-40CC-833B-EA8B895AFFCD.JPEG",
    alt: ALT,
    note: "Square frame.",
    orientation: "square",
  },
  {
    id: "g4",
    src: "/gallery/IMG_0032.JPEG",
    alt: ALT,
    note: "Wide shot.",
    orientation: "landscape",
  },
  {
    id: "g5",
    src: "/gallery/moment.png",
    alt: ALT,
    note: "Candid.",
    orientation: "portrait",
  },
  {
    id: "g6",
    src: "/gallery/IMG_0101.jpg",
    alt: ALT,
    note: "Performance.",
    orientation: "landscape",
  },
  {
    id: "g7",
    src: "/gallery/IMG_0283.jpg",
    alt: ALT,
    note: "Performance.",
    orientation: "landscape",
  },
  {
    id: "g8",
    src: "/gallery/hero.jpg",
    alt: ALT,
    note: "Performance.",
    orientation: "landscape",
  },
  {
    id: "g9",
    src: "/gallery/IMG_5398.jpeg",
    alt: ALT,
    note: "Portrait.",
    orientation: "portrait",
  },
  {
    id: "g10",
    src: "/gallery/IMG_0420.jpg",
    alt: ALT,
    note: "Performance.",
    orientation: "landscape",
  },
  {
    id: "g11",
    src: "/gallery/IMG_0463.jpg",
    alt: ALT,
    note: "Performance.",
    orientation: "landscape",
  },
  {
    id: "g12",
    src: "/gallery/moment-2.png",
    alt: ALT,
    note: "Candid.",
    orientation: "portrait",
  },
  {
    id: "g13",
    src: "/gallery/IMG_1633.jpg",
    alt: ALT,
    note: "Performance.",
    orientation: "landscape",
  },
  {
    id: "g14",
    src: "/gallery/IMG_3381.jpg",
    alt: ALT,
    note: "Performance.",
    orientation: "landscape",
  },
  {
    id: "g15",
    src: "/gallery/A7A84F34-81FD-4145-BFDD-CE79E325C570_1_105_c.jpeg",
    alt: ALT,
    note: "Portrait.",
    orientation: "portrait",
  },
];
