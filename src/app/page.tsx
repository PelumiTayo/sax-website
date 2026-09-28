import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { FeaturedPerformance } from "@/components/sections/FeaturedPerformance";
import { VideoReel } from "@/components/sections/VideoReel";
import { SoundSection } from "@/components/sections/SoundSection";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { RootedInLagos } from "@/components/sections/RootedInLagos";
import { Services } from "@/components/sections/Services";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { reelVideos } from "@/content/videos";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedPerformance />
      <VideoReel
        videos={reelVideos}
        cta={{ href: "/music", label: "All performances" }}
      />
      <SoundSection />
      <GalleryPreview />
      <RootedInLagos />
      <Services />
      <ClosingCTA />
    </>
  );
}
