// src/app/page.tsx
import HeroBanner from "@/components/organisms/HeroBanner/HeroBanner";
import { heroMovies } from "@/modules/Home/constants/banner";

export default function HomePage() {
  return (
    <main>
      <HeroBanner movies={heroMovies} />
    </main>
  );
}
