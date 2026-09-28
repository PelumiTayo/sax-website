import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { closing } from "@/content/home";

export function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-espresso py-20 text-ivory sm:py-40">
      {/* Soft dusk glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 80% at 50% 120%, color-mix(in srgb, var(--color-terracotta) 40%, transparent) 0%, transparent 70%)",
        }}
      />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-ivory sm:text-6xl">
            {closing.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ivory/70">
            {closing.body}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/bookings" size="lg">
              Start an inquiry
            </Button>
            <Button
              href="/music"
              size="lg"
              variant="outline"
              className="border-ivory/35 text-ivory hover:border-ivory"
            >
              Hear me first
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
