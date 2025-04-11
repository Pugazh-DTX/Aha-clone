// src/app/page.tsx
import { ChatWithExpert } from "@/components/atoms/chat-with-expert";
import HeroBanner from "@/components/organisms/HeroBanner/HeroBanner";
import { heroMovies } from "@/modules/Home/constants/banner";

export default function HomePage() {
  return (
    <main>
      <HeroBanner movies={heroMovies} />
      <ChatWithExpert />
    </main>
  );
}
