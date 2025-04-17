// src/app/page.tsx
// import HeroBanner from "@/components/organisms/HeroBanner/HeroBanner";

// import { heroMovies } from "@/modules/Home/constants/banner";
import HomePage from "@/modules/Home/HomePage";

export default function Home () {
  return (
    <main>
      {/* <HeroBanner movies={heroMovies} /> */}
      <HomePage />
    </main>
  );
}
