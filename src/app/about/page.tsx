import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/layout/PageHeader";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { aboutIntro, aboutBlocks, aboutHighlights } from "@/content/about";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${site.artistName}, a Nigerian saxophonist rooted in Afrobeats, building a broader musical identity across live shows, events and collaborations.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="The story so far" lead={aboutIntro} />

      <section className="py-20 sm:py-28">
        <Container width="wide">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Sticky portrait column */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <ImageFrame
                  src="/gallery/IMG_1633.jpg"
                  alt={`${site.artistName} portrait`}
                  note="ABOUT PORTRAIT: a strong editorial portrait, this anchors your story. Warm, characterful, ideally with the saxophone."
                  aspect="aspect-[4/5]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </Reveal>
              {aboutHighlights.length > 0 && (
                <Reveal delay={0.1}>
                  <ul className="mt-8 space-y-3 border-t border-ink/10 pt-8">
                    {aboutHighlights.map((h) => (
                      <li key={h.label} className="flex gap-3 text-sm text-ink-soft">
                        <span className="text-brass" aria-hidden>
                          ♪
                        </span>
                        {h.href ? (
                          <a
                            href={h.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-ink/20 underline-offset-2 transition-colors hover:text-terracotta hover:decoration-terracotta"
                          >
                            {h.label}
                          </a>
                        ) : (
                          h.label
                        )}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>

            {/* Story blocks */}
            <div className="space-y-14">
              {aboutBlocks.map((block, i) => (
                <Reveal key={block.heading} delay={i === 0 ? 0 : 0.04}>
                  <article>
                    <h2 className="font-display text-2xl text-ink sm:text-3xl">
                      {block.heading}
                    </h2>
                    <p
                      className={cn(
                        "mt-4 text-lg leading-relaxed",
                        block.prompt
                          ? "italic text-ink-soft"
                          : "text-ink/90",
                      )}
                    >
                      {block.prompt && (
                        <span className="mr-2 not-italic text-brass">✎</span>
                      )}
                      {block.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
