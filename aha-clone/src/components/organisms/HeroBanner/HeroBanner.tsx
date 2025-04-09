'use client';

import React, { useEffect, useState } from 'react';
import './styles.scss';
import { IHeroMovie } from '@/types/movie';

interface HeroBannerProps {
  movies: IHeroMovie[];
}

const HeroBanner: React.FC<HeroBannerProps> = ({ movies }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % movies.length);
  };

  const getThumbnailMovie = (offset: number) => {
    return movies[(activeIndex + offset + movies.length) % movies.length];
  };

  const activeMovie = movies[activeIndex];

  return (
    <div className="heroContainer">
      <div
        className="heroBackground"
        style={{ backgroundImage: `url(${activeMovie.bgImage})` }}
      >
        <div className="linerar">
          <div className="heroOverlay">
            <div className="details">
              <h1 className="title">{activeMovie.title}</h1>
              <p className="meta">
                {activeMovie.year} • {activeMovie.length} • {activeMovie.genre}
              </p>
              <p className="description">{activeMovie.description}</p>
            </div>

            <div className="thumbnailCarousel">
              <button className="arrow-left" onClick={handlePrev}>❮</button>
              <div className="carouseltrack">
                {[getThumbnailMovie(-1), activeMovie, getThumbnailMovie(1)].map((movie, index) => (
                  <img
                    key={movie.id || index}
                    src={movie.thumbnail}
                    alt={movie.title}
                    className={`thumbnail ${index === 1 ? 'active' : ''}`}
                    onClick={() => {
                      const newIndex = movies.findIndex((m) => m.id === movie.id);
                      if (newIndex !== -1) setActiveIndex(newIndex);
                    }}
                  />
                ))}
              </div>

              <button className="arrow-right" onClick={handleNext}>❯</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
