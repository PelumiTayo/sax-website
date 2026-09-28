import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { rooted } from "@/content/home";

/**
 * The identity moment. Nigerian roots and Afrobeats expressed through language
 * and warmth, no motifs, patterns or flags. Deliberately typographic.
 */
export function RootedInLagos() {
  return (
    <section className="bg-burgundy py-20 text-ivory sm:py-36">
      <Container width="wide">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-brass-soft">{rooted.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-3xl italic leading-tight text-ivory sm:text-5xl">
                {rooted.title}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rule-brass my-8 max-w-24" />
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-xl text-lg leading-relaxed text-ivory/75">
                {rooted.body}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ImageFrame
              src={rooted.image}
              alt={rooted.imageAlt}
              note={rooted.portraitNote}
              aspect="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
