/**
 * Audio / releases for the "Sound" section.
 *
 * ▸ For a Spotify track/album/playlist, set provider "spotify" and paste the
 *   embed id (the part after /track/ , /album/ or /playlist/ in the URL).
 * ▸ For a self-hosted clip, set provider "file" and put the audio path in /public.
 * ▸ The Sound section hides itself entirely while this list is empty, so the
 *   homepage never shows an empty player.
 */

export type AudioProvider = "spotify" | "file";
export type SpotifyKind = "track" | "album" | "playlist";

export type AudioItem = {
  id: string;
  provider: AudioProvider;
  title: string;
  detail?: string;
  spotifyKind?: SpotifyKind; // when provider === "spotify"
  src?: string; // /public path when provider === "file"
  featured?: boolean; // render this one large, with a "Featured" tag
};

export const audio: AudioItem[] = [
  {
    id: "285tPG1KkQv8dHiHH1AKrN",
    provider: "spotify",
    spotifyKind: "track",
    title: "Sauvignon Blanc, Lesléy",
    detail: "Saxophone, LumiTunes",
    featured: true,
  },
  {
    id: "3k6DUcntecsjg78Isowkp5",
    provider: "spotify",
    spotifyKind: "track",
    title: "Summer Love, Lesléy",
    detail: "Saxophone, LumiTunes",
  },
  {
    id: "4jioZCCvsfxTJRM8ojWNq1",
    provider: "spotify",
    spotifyKind: "track",
    title: "Take You Away, Lesléy",
    detail: "Saxophone, LumiTunes",
  },
];
