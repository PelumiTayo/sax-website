/**
 * About page content.
 *
 * The `body` fields hold your real story, in your own voice. If you ever want to
 * add a new block as a reminder to write something, set `prompt: true` and it
 * renders as an italic guidance note; set it to false once real copy is in.
 */

export type AboutBlock = {
  heading: string;
  body: string;
  prompt?: boolean;
};

export const aboutIntro =
  "Lagos-born, Seattle-based. Software engineer by day, saxophonist by night, and always chasing the sound of home.";

export const aboutBlocks: AboutBlock[] = [
  {
    heading: "Where I'm from",
    body: "I'm from Lagos, Nigeria. I was born there, immigrated to the U.S., and I've been here ever since, but Lagos is still in everything I play.",
  },
  {
    heading: "How the saxophone found me",
    body: "My dad. He played saxophone long before I did, and he's the one who taught me and passed it on. I picked it up from him and I've been cultivating it ever since.",
  },
  {
    heading: "Rooted in Afrobeats",
    body: "Afrobeats is my connection to my culture. The sounds just resonate with me, it's music I genuinely love, and it's the foundation everything else I play grows from.",
  },
  {
    heading: "The band that opened doors",
    body: "A big part of making a name for myself out here in Seattle has been my band, AfroLiveJamsSessions. They're a huge part of the reason I've been able to do what I do in this city.",
  },
  {
    heading: "What I love about performing",
    body: "Seeing people happy. Watching a room enjoy the sound coming out of my horn, that's the whole thing for me.",
  },
  {
    heading: "Where it's going",
    body: "I'd love to share stages with big Afrobeats artists one day. I know that takes work, and I'm putting it in. I also want to do more content creation and keep growing how I reach people.",
  },
  {
    heading: "Off stage",
    body: "I'm a quiet person. I keep to myself, and I love my own space and my own peace. By day I'm a software engineer; by night, this.",
  },
];

/** Optional milestones / notable moments. Real ones only.
 *  Set `href` to make a highlight link out (e.g. to the band's page). */
export type Highlight = { label: string; href?: string };

export const aboutHighlights: Highlight[] = [
  {
    label: "Member of AfroLiveJamsSessions, Seattle",
    href: "https://www.instagram.com/AfroLiveJamsSessions/",
  },
];
