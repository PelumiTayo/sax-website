# Saxophonist — personal website

An artist portfolio and professional booking site. Editorial, warm, cinematic.
Built with **Next.js 16 + TypeScript + Tailwind v4 + Framer Motion**, deployable
to Vercel. See [`DESIGN.md`](./DESIGN.md) for the full creative direction.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build + type check
```

## Make it yours — the 5-minute pass

Everything you edit lives in **`src/content/`**. No component code required.

| File | What it controls |
| --- | --- |
| `src/content/site.ts` | **Start here.** Your name, tagline, email, location, social links, and the booking form endpoint. |
| `src/content/home.ts` | Homepage copy: hero, intro, the "Rooted in Lagos" identity block, closing line. Also where you point the hero image/video. |
| `src/content/about.ts` | Your story. The italic prompts are questions to answer — replace each and set `prompt: false`. |
| `src/content/videos.ts` | Performance videos (YouTube/Vimeo/link). Mark one `featured: true`. |
| `src/content/gallery.ts` | Photo gallery. Point each `src` at a file in `/public`. |
| `src/content/music.ts` | Audio / Spotify embeds (the Sound section hides itself until you add one). |
| `src/content/services.ts` | The "ways to work together" cards. |
| `src/content/testimonials.ts` | Real quotes only — empty by default, shows a tasteful placeholder until filled. |

### Adding photos & video

1. Drop image files into `public/media/` (portraits, hero) or `public/gallery/`.
2. Reference them by path, e.g. in `gallery.ts`: `src: "/gallery/portrait-1.jpg"`.
3. For the hero, set `heroImage: "/media/hero.jpg"` **or** `heroVideo: "/media/hero-loop.mp4"` in `home.ts`.
4. Any item left without a real file shows a labeled placeholder describing the
   shot to collect — nothing is ever faked.

**Recommended sizes:** hero image ≥ 1600px wide; gallery images ~1600px on the
long edge; a `public/og.jpg` at 1200×630 for rich social-share previews.

### Connecting the booking form

The inquiry form runs in **demo mode** until you connect an endpoint:

1. Create a free form at [formspree.io](https://formspree.io) (or similar).
2. Paste the endpoint into `formEndpoint` in `src/content/site.ts`.

Submissions then arrive in your inbox. Spam is filtered with a honeypot field.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new) — no config needed.
3. Add your custom domain in the Vercel dashboard.

## Asset checklist (for the exceptional finish)

- [ ] Hero: vertical ¾/full-body portrait with sax, dramatic-natural dusk light, negative space for text
- [ ] Optional 10–20s muted hero video loop
- [ ] Intro & About portraits (warm, editorial)
- [ ] Strongest full performance video + a still for its poster
- [ ] 4–8 reel videos (links fine)
- [ ] 8–15 gallery photos, **mixed orientations** (performance / portrait / detail / BTS)
- [ ] `public/og.jpg` for social sharing
- [ ] `public/favicon.ico` (a simple monogram of your initials works well)

## Future expansion (architecture already supports it)

Upcoming shows, press/EPK, music releases, a mailing list, and a downloadable
booking kit can be added as new content files + a page, without restructuring.
A lightweight CMS (Sanity) can be layered on later if you'd like a dashboard.
