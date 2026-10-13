/**
 * Ways to work together. Framed as artistic collaboration, not vendor listings.
 * Add, remove, or reorder freely, the layout adapts.
 */

export type Service = {
  title: string;
  blurb: string;
  offerings: string;
  audience: string;
  operations: string;
};

export const services: Service[] = [
  {
    title: "Private Events (Weddings, Birthdays & Celebrations)",
    blurb:
      "Tailored live music performances for private milestones, creating an engaging and memorable atmosphere for guests.",
    offerings:
      "Custom setlists, acoustic soloist to full ensemble configurations, professional sound reinforcement.",
    audience: "Couples, event planners, private hosts.",
    operations: "Seamless load-in, rider management, and client consultations.",
  },
  {
    title: "Corporate Events",
    blurb:
      "Professional entertainment solutions designed for corporate galas, product launches, brand activations, and annual celebrations.",
    offerings:
      "Background jazz sets, upbeat corporate party bands, ambient instrumental interludes.",
    audience: "Corporate event coordinators, marketing agencies, HR committees.",
    operations:
      "Punctuality, professional attire, scalable sound systems tailored to venue acoustic constraints.",
  },
  {
    title: "Live Shows (Festivals & Concerts)",
    blurb:
      "High-energy public concert performances and major festival appearances featuring live Afrobeats and jazz arrangements.",
    offerings:
      "Headlining or supporting slot performances, full band production, stage lighting coordination.",
    audience: "Festival promoters, venue bookers, music enthusiasts.",
    operations:
      "Technical stage plots, professional audio mixing via digital consoles, promotional alignment.",
  },
  {
    title: "Artist Collaborations & Studio Work",
    blurb:
      "Creative partnerships, recording sessions, and live instrumental feature work with fellow musicians, producers, and vocalists.",
    offerings:
      "Session saxophone recording, horn section arrangements, co-writing, live guest features.",
    audience: "Independent artists, music producers, recording studios.",
    operations: "Stem delivery, chart notation, collaborative studio sessions.",
  },
];
