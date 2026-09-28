import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { audio, type AudioItem } from "@/content/music";

/** Elegant audio strip. Renders nothing when there's no audio yet, so the page
 *  never shows an empty player. */
export function SoundSection() {
  if (audio.length === 0) return null;

  const featured = audio.filter((item) => item.featured);
  const rest = audio.filter((item) => !item.featured);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mb-10 max-w-2xl">
          <Reveal>
            <p className="eyebrow">Sound</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-title mt-4">Recordings &amp; releases</h2>
          </Reveal>
        </div>

        {featured.map((item) => (
          <Reveal key={item.id} className="mb-6">
            <AudioEmbed item={item} featured />
          </Reveal>
        ))}

        {rest.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((item) => (
              <Reveal key={item.id}>
                <AudioEmbed item={item} />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

function AudioEmbed({
  item,
  featured = false,
}: {
  item: AudioItem;
  featured?: boolean;
}) {
  if (item.provider === "spotify") {
    // The compact track player is 152px; the expanded one (with large art) is
    // 352px, we give the featured track the larger, more prominent player.
    const height = item.spotifyKind !== "track" || featured ? 352 : 152;
    return (
      <div>
        {(featured || item.detail) && (
          <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            {featured && <span className="eyebrow text-terracotta">Featured</span>}
            {item.detail && (
              <span className="text-sm text-ink-soft">{item.detail}</span>
            )}
          </div>
        )}
        <div className="overflow-hidden rounded-xl">
          <iframe
            title={item.title}
            src={`https://open.spotify.com/embed/${item.spotifyKind}/${item.id}?theme=0`}
            width="100%"
            height={height}
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="border-0"
          />
        </div>
      </div>
    );
  }

  return (
    <figure className="rounded-xl border border-ink/10 bg-ivory-deep/50 p-6">
      <figcaption className="mb-4">
        <p className="font-display text-xl">{item.title}</p>
        {item.detail && (
          <p className="mt-1 text-sm text-ink-soft">{item.detail}</p>
        )}
      </figcaption>
      {item.src ? (
        <audio controls preload="none" className="w-full">
          <source src={item.src} />
        </audio>
      ) : (
        <p className="text-xs italic text-ink-soft">Audio file coming soon</p>
      )}
    </figure>
  );
}
