import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PhotoGallery } from "@/components/media/PhotoGallery";
import { gallery } from "@/content/gallery";

export function GalleryPreview() {
  const preview = gallery.slice(0, 6);

  return (
    <section className="bg-ivory-deep/40 py-24 sm:py-32">
      <Container width="wide">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow">Gallery</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-title mt-4">In frame</h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Button href="/gallery" variant="outline">
              View full gallery
              <span aria-hidden>→</span>
            </Button>
          </Reveal>
        </div>

        <PhotoGallery photos={preview} />
      </Container>
    </section>
  );
}
