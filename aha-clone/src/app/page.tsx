// src/app/page.tsx
<<<<<<< HEAD
// import HeroBanner from "@/components/organisms/HeroBanner/HeroBanner";

// import { heroMovies } from "@/modules/Home/constants/banner";
import HomePage from "@/modules/Home/HomePage";

export default function Home () {
  return (
    <main>
      {/* <HeroBanner movies={heroMovies} /> */}
      <HomePage />
=======

import { ChatWithExpert } from "@/components/atoms/ChatWithExpert";
import Card from "@/components/molecules/Card";
import HeroBanner from "@/components/organisms/HeroBanner/HeroBanner";
import SliderCarousel from "@/components/organisms/SliderCarousel";
import { heroMovies } from "@/modules/Home/constants/banner";
import { IMoviesSection, movies } from "@/utils/Home/moviedata";
export default function HomePage() {
  return (
    <main>
      <HeroBanner movies={heroMovies} />
      <ChatWithExpert />
      <Card
        isCastCard={false}
        footerTitle={"Cricket World Cup"}
        imageSrc={
          "https://image-resizer-cloud-api.akamaized.net/image/FC9BAF7F-3292-4CB7-B7E9-314E0D09CD0E/0-2x3.jpg?width=305&updatedTime=2025-04-11T10:26:04Z&dt=Web"
        }
        isPremium={true}
        aspectRatio={"2/3"}
        cardWidth={"160px"}
        isRoundedImage={false}
        overlayPlayIcon={false}
        overlayText=""
        isAdultContent={false}
        isContinueWatching={true}
        totalTimeDuration={"1000"}
        watchTimeDuration={"100"}
      />

      <Card
        isCastCard={true}
        footerTitle={"Subhalekha Sudhakar"}
        imageSrc={
          "https://image-resizer-cloud-api.akamaized.net/image/8995C63C-D9F9-4D0D-91E3-5432765F028A/3-1x1.jpg?width=305&updatedTime=2024-05-08T07:07:55Z&dt=Web"
        }
        isPremium={false}
        aspectRatio={"1/1"}
        cardWidth={"96px"}
        isRoundedImage={false}
        overlayPlayIcon={false}
        overlayText=""
        isAdultContent={false}
        isContinueWatching={false}
        totalTimeDuration={""}
        watchTimeDuration={""}
      />
      <SliderCarousel movies={movies} />
>>>>>>> 4b6a4f70a486013a11dc879771ff7695938a60b0
    </main>
  );
}
