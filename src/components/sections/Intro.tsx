import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Button } from "@/components/ui/Button";
import { intro } from "@/content/home";

export function Intro() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <Reveal>
            <ImageFrame
              src={intro.image}
              alt={intro.imageAlt}
              note={intro.portraitNote}
              aspect="aspect-[4/5]"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">{intro.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 font-display text-2xl leading-snug text-ink sm:text-3xl">
                {intro.body}
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-8">
                <Button href="/about" variant="ghost" className="px-0">
                  Read my story
                  <span aria-hidden>→</span>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
