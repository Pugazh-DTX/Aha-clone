"use client";
import React, { useState } from "react";
import HeroBanner from "@/components/organisms/HeroBanner/HeroBanner";
import { heroMovies } from "./constants/banner";
import Card from "@/components/molecules/Card";

const HomePage = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const currentMovie = heroMovies[currentMovieIndex];

  const handleThumbnailClick = (index: number) => {
    setCurrentMovieIndex(index);
  };

  return (
    <div>
      <HeroBanner
        movies={currentMovie}
        thumbnails={heroMovies}
        onThumbnailClick={handleThumbnailClick}
        activeIndex={currentMovieIndex}
      />
    </div>
  );
};

export default HomePage;
