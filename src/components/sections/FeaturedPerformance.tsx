"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { PlayButton } from "@/components/media/PlayButton";
import { VideoLightbox } from "@/components/media/VideoLightbox";
import { featuredVideo } from "@/content/videos";
import { isEmbeddable } from "@/lib/video";
import type { Video } from "@/content/videos";

export function FeaturedPerformance() {
  const [active, setActive] = useState<Video | null>(null);
  const embeddable = isEmbeddable(featuredVideo);

  const open = () => {
    if (embeddable) setActive(featuredVideo);
    else if (featuredVideo.url) window.open(featuredVideo.url, "_blank");
  };

  return (
    <section className="bg-espresso py-24 text-ivory sm:py-32">
      <Container width="wide">
        <div className="mb-10 max-w-2xl">
          <Reveal>
            <p className="eyebrow text-brass-soft">Featured performance</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-title mt-4 text-ivory">
              Don&apos;t take my word for it, hear it.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <button
            type="button"
            onClick={open}
            className="group relative block w-full overflow-hidden rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
            aria-label={`Play ${featuredVideo.title}`}
          >
            <ImageFrame
              src={featuredVideo.poster}
              alt={featuredVideo.title}
              note={featuredVideo.posterNote}
              aspect="aspect-video"
              rounded={false}
              hoverZoom
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
            <div className="pointer-events-none absolute inset-0 overlay-dusk opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <PlayButton size="lg" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 text-left sm:p-10">
              {featuredVideo.context && (
                <span className="eyebrow text-brass-soft">
                  {featuredVideo.context}
                </span>
              )}
              <p className="mt-2 font-display text-2xl text-ivory sm:text-4xl">
                {featuredVideo.title}
              </p>
            </div>
          </button>
        </Reveal>
      </Container>

      <VideoLightbox video={active} onClose={() => setActive(null)} />
    </section>
  );
}
