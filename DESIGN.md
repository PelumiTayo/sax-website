# Design Direction — "The Warm Line"

A personal website for a Nigerian saxophonist. Artist portfolio + professional
booking destination. Editorial/cinematic, warm, feminine-not-girly, premium.

Concept: a saxophone is the most human instrument because it *breathes*. The
brand is a distinctive musical voice — rooted in Lagos, fluent in Afrobeats,
built to travel across genres. Nigerian identity shows through warmth of palette,
language, and cadence — never clichéd patterns, flags, or giant brass graphics.

## Palette — "Lagos Dusk"

| Role | Name | HEX |
|---|---|---|
| Base background | Warm Ivory | `#F5EFE6` |
| Deep ground | Espresso Plum | `#241A1E` |
| Primary accent | Burnt Terracotta | `#C1633B` |
| Secondary accent | Deep Burgundy | `#6E2233` |
| Jewel support | Muted Forest | `#3E4B3C` |
| Metallic (sparing) | Antique Brass | `#B08A54` |
| Body text | Ink | `#2B2320` |

## Typography

- **Display:** Fraunces (editorial high-contrast serif) — headlines, name, titles.
- **Text:** Inter — body, nav, buttons, forms, captions.

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind v4 + Framer Motion.
- Content lives in typed data files under `src/content/` — edit one file to add
  a photo, video, service, or testimonial. CMS (Sanity) can be layered later.
- Deploy: Vercel.
- Inquiry form: emailed via a form service (Formspree/Resend) — placeholder key.

## Site Map

- `/` Home — cinematic journey previewing every section
- `/about` — personal, editorial story
- `/music` — Music & Performances: featured video, reel, audio
- `/gallery` — editorial photography
- `/bookings` — inquiry form + simple contact

Reserved for future (architecture supports, not built yet): upcoming shows,
press/EPK, music releases, mailing list, downloadable booking kit.

## Homepage sections

1. Hero — cinematic portrait/video, minimal type, Watch + Book CTAs
2. Introduction — short first-person paragraph + portrait
3. Featured Performance — one hero video, tasteful custom player
4. Performance Reel — editorial video gallery
5. Sound / Music — elegant audio strip (optional)
6. Gallery preview — staggered photos → /gallery
7. Rooted in Lagos — identity storytelling (words + warmth, no motifs)
8. Services — six "ways to work together" cards
9. Testimonials — reserved component, placeholders only
10. Closing CTA — full-width dusk band
11. Footer — socials, email, nav

## Motion

Breath-and-rhythm reveals; soft musical easing; bow-stroke underlines; warm
hover; soft page transitions. No parallax/cursor gimmicks. Respect
`prefers-reduced-motion`. Mobile-first.

## Content rules

Never invent name, bio, accomplishments, testimonials, clients, follower counts,
or use another musician's photos. All missing content is clearly-labeled
placeholders. Artist name is a single placeholder constant in `src/content/site.ts`.
