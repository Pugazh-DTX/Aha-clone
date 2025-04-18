// src/app/page.tsx

import Card from "@/components/molecules/Card";
import SubscribeCard from "@/components/molecules/SubscribeCard";
import HeroBanner from "@/components/organisms/HeroBanner/HeroBanner";
import SliderCarousel from "@/components/organisms/SliderCarousel";
import HeroBannerWrapper from "@/modules/Home/HomePage";
import { movies } from "@/utils/Home/moviedata";
export default function HomePage() {
  return (
    <main>
      <HeroBannerWrapper />
      <SliderCarousel movies={movies} />
    </main>
  );
}
