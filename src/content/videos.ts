/**
 * Performance videos.
 *
 * ▸ `featured: true` marks the single hero video on the homepage.
 * ▸ `provider` + `id` build the embed. For YouTube use the 11-char video id;
 *   for Vimeo the numeric id.
 * ▸ Instagram / TikTok don't offer clean inline players, link out with
 *   `provider: "link"` and set `url`.
 * ▸ `poster` is the path (in /public) to a still image used as the thumbnail.
 *   While empty, a labeled placeholder is shown describing the shot needed.
 */

export type VideoProvider = "youtube" | "vimeo" | "link";

export type Video = {
  id: string; // provider id, or a unique slug for "link"
  provider: VideoProvider;
  title: string;
  context?: string; // e.g. "Live at …", "Studio session"
  poster?: string; // /public path to a still
  posterNote: string; // description of the ideal still, shown while poster is empty
  url?: string; // required when provider is "link"
  featured?: boolean;
};

export const videos: Video[] = [
  {
    id: "featured-1",
    provider: "youtube",
    title: "Featured Performance",
    context: "Your strongest full performance",
    posterNote:
      "FEATURED STILL: a striking frame from your best performance video, mid-phrase, eyes closed or engaged, warm stage light.",
    featured: true,
  },
  {
    id: "reel-1",
    provider: "youtube",
    title: "Afrobeats Live Set",
    context: "Live event",
    posterNote:
      "REEL STILL 1: energetic live moment, crowd or stage lighting visible.",
  },
  {
    id: "reel-2",
    provider: "youtube",
    title: "Wedding Ceremony",
    context: "Wedding",
    posterNote:
      "REEL STILL 2: elegant, softer setting, playing during a ceremony or reception.",
  },
  {
    id: "reel-3",
    provider: "link",
    url: "",
    title: "Short Clip",
    context: "Instagram / TikTok",
    posterNote:
      "REEL STILL 3: vertical short-form clip thumbnail, close, characterful.",
  },
  {
    id: "reel-4",
    provider: "youtube",
    title: "Studio Session",
    context: "Studio",
    posterNote:
      "REEL STILL 4: intimate studio shot, headphones, mic, recording.",
  },
];

export const featuredVideo = videos.find((v) => v.featured) ?? videos[0];
export const reelVideos = videos.filter((v) => !v.featured);
