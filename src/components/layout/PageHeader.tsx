import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** Interior-page header band. Clears the fixed nav and sets the editorial tone. */
export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="border-b border-ink/8 pb-14 pt-32 sm:pb-20 sm:pt-40">
      <Container width="wide">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-display mt-5 font-display text-ink">{title}</h1>
        </Reveal>
        {lead && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {lead}
            </p>
          </Reveal>
        )}
      </Container>
    </header>
  );
}
