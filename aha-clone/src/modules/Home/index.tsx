'use client';

import React, { useState } from 'react';
import HeroBanner from '@/components/organisms/HeroBanner/HeroBanner';
import { heroMovies } from './constants/banner';

const HomePage = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const currentMovie = heroMovies[currentMovieIndex];

  // Handle thumbnail click to update the active movie
  const handleThumbnailClick = (index: number) => {
    setCurrentMovieIndex(index);
  };

  return (
    <div>
      <HeroBanner
        movies={heroMovies} // Pass the full movie list
        thumbnails={heroMovies} // Pass the thumbnails array
        onThumbnailClick={handleThumbnailClick} // Handler for thumbnail click
        activeIndex={currentMovieIndex} // Active index to highlight the current movie
      />
    </div>
  );
};

export default HomePage;
