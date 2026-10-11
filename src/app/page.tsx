import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { FeaturedPerformance } from "@/components/sections/FeaturedPerformance";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { RootedInLagos } from "@/components/sections/RootedInLagos";
import { Services } from "@/components/sections/Services";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Intro />
      <FeaturedPerformance />
      <GalleryPreview />
      <RootedInLagos />
      <ClosingCTA />
    </>
  );
}
