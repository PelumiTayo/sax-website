"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Shows } from "@/components/sections/Shows";
import { site } from "@/content/site";
import { hero } from "@/content/home";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  const reduce = useReducedMotion();
  const hasVideo = Boolean(hero.heroVideo);
  const hasImage = Boolean(hero.heroImage);

  const rise = (delay: number) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6, delay } }
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, ease: EASE, delay },
        };

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-espresso">
      {/* Media layer */}
      <div className="absolute inset-0">
        {hasVideo ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={hero.posterImage || undefined}
          >
            <source src={hero.heroVideo} type="video/mp4" />
          </video>
        ) : hasImage ? (
          <Image
            src={hero.heroImage}
            alt={`${site.artistName}, ${site.role}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <HeroPlaceholder />
        )}
        {/* Dusk gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/45 to-espresso/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/55 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 pt-32 sm:px-8 sm:pb-36 lg:px-10">
        <motion.p {...rise(0.1)} className="eyebrow text-brass-soft">
          {site.role} · Lagos → Chicago → Seattle
        </motion.p>
        <motion.h1
          {...rise(0.2)}
          className="text-display mt-5 max-w-4xl font-display text-ivory"
        >
          {site.artistName}
        </motion.h1>
        <motion.p
          {...rise(0.35)}
          className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/80 sm:text-xl"
        >
          {site.tagline}
        </motion.p>
        <motion.div {...rise(0.5)} className="mt-9 flex flex-wrap items-center gap-4">
          <Button href="/music" size="lg" variant="primary">
            Watch me play
          </Button>
          <Button
            href="/bookings"
            size="lg"
            variant="outline"
            className="border-ivory/35 text-ivory hover:border-ivory"
          >
            Book me
          </Button>
        </motion.div>
      </div>

      {/* Live-dates ticker, anchored to the bottom of the first screen */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <Shows />
      </div>
    </section>
  );
}

function HeroPlaceholder() {
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{
        backgroundImage:
          "radial-gradient(120% 100% at 70% 30%, color-mix(in srgb, var(--color-burgundy) 55%, var(--color-espresso)) 0%, var(--color-espresso) 60%)",
      }}
      role="img"
      aria-label={`Placeholder, ${hero.heroNote}`}
    >
      <div className="mx-auto max-w-md px-8 text-center">
        <span className="eyebrow text-brass-soft">Hero image</span>
        <p className="mt-3 text-sm leading-relaxed text-ivory/55">
          {hero.heroNote}
        </p>
      </div>
    </div>
  );
}
