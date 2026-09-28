import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";

export function Services() {
  return (
    <section className="py-24 sm:py-32">
      <Container width="wide">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <p className="eyebrow">Ways to work together</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-title mt-4">
              One saxophone, many kinds of night.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              From a first dance to a festival stage to a studio take, here are
              the moments I love bringing live saxophone to.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <RevealItem key={service.title}>
              <div className="group flex h-full flex-col bg-ivory p-8 transition-colors duration-500 hover:bg-ivory-deep/50">
                <span className="font-display text-sm text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {service.blurb}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <Button href="/bookings" size="lg">
              Inquire about a performance
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
