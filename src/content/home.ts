/**
 * Homepage copy & media.
 *
 * ▸ Hero: provide EITHER a `heroVideo` (muted loop, e.g. "/media/hero.mp4") OR
 *   a `heroImage` (e.g. "/media/hero.jpg"). If both are empty, a labeled
 *   placeholder describes the shot. Video takes priority when present.
 * ▸ Rewrite the copy in your own voice, these are starting points, not facts.
 */

export const hero = {
  heroVideo: "", // e.g. "/media/hero-loop.mp4"
  heroImage: "/media/hero-main.jpg", // converted from 48BE…heic (4032×3024)
  posterImage: "", // still shown while the hero video loads (optional)
  heroNote:
    "HERO: full-body or ¾ portrait holding the saxophone, vertical composition, dramatic-but-natural dusk light, negative space on one side for the name. A 10–20s muted video loop works even better here.",
};

export const intro = {
  eyebrow: "Introduction",
  // Keep it first-person, short, and warm. This greets everyone who scrolls.
  body: "I'm Pelumi, LumiTunes on stage. I was born in Lagos, Nigeria, moved to the U.S., and have been here ever since. Music is how I ground myself: software engineer by day, saxophonist by night.",
  // The portrait beside the introduction. Leave empty ("") to show the placeholder.
  image: "/media/Intro.PNG",
  imageAlt: "Pelumi Tayo Orisadare, LumiTunes",
  portraitNote:
    "INTRO PORTRAIT: a calmer editorial portrait, face / upper body, warm tones, confident and relaxed.",
};

export const rooted = {
  eyebrow: "Homegrown",
  title: "Afrobeats is where I began. It isn't where I end.",
  body: "Afrobeats is my connection to home, to my culture and the sounds I grew up on. Those rhythms just resonate with me, and playing them is where I feel most myself. It's the foundation everything else I explore grows from.",
  // The identity image beside this section. Leave empty ("") to show the placeholder.
  image: "/gallery/A7A84F34-81FD-4145-BFDD-CE79E325C570_1_105_c.jpeg",
  imageAlt: "Pelumi Tayo Orisadare, LumiTunes",
  portraitNote:
    "IDENTITY IMAGE: an expressive, characterful frame, could be movement, colour, or a portrait that feels like home.",
};

export const closing = {
  title: "Let's make something worth remembering.",
  body: "Tell me about your event, your show, or the sound you're chasing, I'll get back to you personally.",
};
