"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { VideoThumb } from "@/components/media/VideoThumb";
import { VideoLightbox } from "@/components/media/VideoLightbox";
import type { Video } from "@/content/videos";

/** Editorial, asymmetric video gallery. Used on the homepage (preview) and the
 *  Music page (full). Pass `showAll` to render every video. */
export function VideoReel({
  videos,
  eyebrow = "Performance reel",
  title = "A few moments on stage",
  cta,
}: {
  videos: Video[];
  eyebrow?: string;
  title?: string;
  cta?: { href: string; label: string };
}) {
  const [active, setActive] = useState<Video | null>(null);
  if (videos.length === 0) return null;

  return (
    <section className="py-24 sm:py-32">
      <Container width="wide">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow">{eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-title mt-4">{title}</h2>
            </Reveal>
          </div>
          {cta && (
            <Reveal delay={0.1}>
              <Button href={cta.href} variant="outline">
                {cta.label}
                <span aria-hidden>→</span>
              </Button>
            </Reveal>
          )}
        </div>

        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, i) => (
            <RevealItem
              key={video.id}
              // Give the first tile extra presence on larger screens.
              className={i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-1" : ""}
            >
              <VideoThumb
                video={video}
                onOpen={setActive}
                aspect={i === 0 ? "aspect-[16/9]" : "aspect-video"}
                playSize={i === 0 ? "lg" : "md"}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>

      <VideoLightbox video={active} onClose={() => setActive(null)} />
    </section>
  );
}
