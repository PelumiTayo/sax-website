import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/layout/PageHeader";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { site, socials } from "@/content/site";

export const metadata: Metadata = {
  title: "Bookings",
  description: `Book ${site.artistName} for weddings, events, live shows, collaborations and studio sessions. Send an inquiry and hear back personally.`,
};

export default function BookingsPage() {
  const activeSocials = socials.filter((s) => s.href);

  return (
    <>
      <PageHeader
        eyebrow="Bookings & Inquiries"
        title="Let's talk"
        lead="Tell me about your event, show or session. There are no wrong answers, even a rough idea is a great place to start."
      />

      <section className="py-16 sm:py-24">
        <Container width="wide">
          <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            <Reveal>
              <InquiryForm />
            </Reveal>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <Reveal delay={0.08}>
                <div className="rounded-3xl bg-ivory-deep/50 p-8">
                  <h2 className="font-display text-2xl text-ink">
                    Prefer to just email?
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    That works too. Reach me directly and I&apos;ll reply
                    personally.
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-4 inline-block border-b border-terracotta pb-0.5 text-terracotta transition-colors hover:border-burgundy hover:text-burgundy"
                  >
                    {site.email}
                  </a>
                  {site.phone && (
                    <p className="mt-4 text-sm text-ink-soft">
                      Or call/WhatsApp:{" "}
                      <a href={`tel:${site.phone}`} className="text-ink underline">
                        {site.phone}
                      </a>
                    </p>
                  )}

                  <div className="rule-brass my-7" />

                  <p className="eyebrow mb-4">Follow along</p>
                  {activeSocials.length > 0 ? (
                    <ul className="space-y-2 text-sm">
                      {activeSocials.map((s) => (
                        <li key={s.label}>
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ink/80 transition-colors hover:text-terracotta"
                          >
                            {s.label}{" "}
                            <span className="text-ink-soft">{s.handle}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs italic text-ink-soft">
                      Social links coming soon.
                    </p>
                  )}

                  <div className="rule-brass my-7" />

                  <p className="text-xs leading-relaxed text-ink-soft">
                    Based in {site.location}, available to travel. For dated
                    events, reaching out 4+ weeks ahead helps me hold the date.
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
