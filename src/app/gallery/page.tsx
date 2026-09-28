import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { PhotoGallery } from "@/components/media/PhotoGallery";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { gallery } from "@/content/gallery";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Photography of ${site.artistName}, performances, portraits, rehearsals and events.`,
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="In frame"
        lead="Performances, portraits and moments in between."
      />
      <section className="py-20 sm:py-28">
        <Container width="wide">
          <PhotoGallery photos={gallery} />
        </Container>
      </section>
      <ClosingCTA />
    </>
  );
}
