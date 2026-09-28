import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { FeaturedPerformance } from "@/components/sections/FeaturedPerformance";
import { VideoReel } from "@/components/sections/VideoReel";
import { SoundSection } from "@/components/sections/SoundSection";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { reelVideos } from "@/content/videos";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Music & Performances",
  description: `Watch and listen to ${site.artistName}, live performances, clips and recordings.`,
};

export default function MusicPage() {
  return (
    <>
      <PageHeader
        eyebrow="Music & Performances"
        title="Hear it live"
        lead="Performances, clips and recordings. Press play, this is the part words can't do."
      />
      <FeaturedPerformance />
      <VideoReel
        videos={reelVideos}
        eyebrow="The reel"
        title="More performances"
      />
      <SoundSection />
      <ClosingCTA />
    </>
  );
}
