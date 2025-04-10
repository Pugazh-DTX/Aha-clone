'use client';

import React, { useEffect, useState, useRef } from 'react';
import './styles.scss';
import { IHeroMovie } from '@/types/movie';

interface HeroBannerProps {
  movies: IHeroMovie[];
}

const HeroBanner: React.FC<HeroBannerProps> = ({ movies }) => {
  const visibleSlides = 3;
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const thumbnailWidth = 110;
  const transitionDuration = 600;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [movies.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % movies.length);
  };

  const handleSwipe = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? handleNext() : handlePrev();
    }
  };

  const getVisibleThumbnails = () => {
    const half = Math.floor(visibleSlides / 2);
    const visible = [];

    for (let i = -half; i <= half; i++) {
      const index = (activeIndex + i + movies.length) % movies.length;
      visible.push({ ...movies[index], originalIndex: index });
    }

    return visible;
  };

  const activeMovie = movies[activeIndex];

  return (
    <div className="heroContainer">
      <div
        className="heroBackground"
        style={{ backgroundImage: `url(${activeMovie.bgImage})` }}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          touchEndX.current = e.changedTouches[0].clientX;
          handleSwipe();
        }}
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

            {/* Thumbnail carousel for desktop */}
            <div className="thumbnailCarousel desktopOnly">


              <div className="thumbnailArrows-left">
                <button className="arrow-left" onClick={handlePrev}>❮</button>
              </div>

              <div className="carouselViewport">
                <div
                  className="carouseltrack"
                  style={{
                    transform: `translateX(-${thumbnailWidth}px)`,
                    transition: `transform ${transitionDuration}ms ease`,
                  }}
                >
                  <img
                    src={movies[(activeIndex - 1 + movies.length) % movies.length].thumbnail}
                    alt="prev"
                    className="thumbnail"
                  />

                  {getVisibleThumbnails().map((movie) => (
                    <img
                      key={movie.originalIndex}
                      src={movie.thumbnail}
                      alt={movie.title}
                      className={`thumbnail ${movie.originalIndex === activeIndex ? 'active' : ''}`}
                      onClick={() => setActiveIndex(movie.originalIndex)}
                    />
                  ))}

                  <img
                    src={movies[(activeIndex + 1) % movies.length].thumbnail}
                    alt="next"
                    className="thumbnail"
                  />
                </div>
              </div>
              <div className="thumbnailArrows-right">
                <button className="arrow-right" onClick={handleNext}>❯</button>
              </div>

            </div>
          </div>
        </div>

        {/* Dots (outside linear for mobile) */}
        <div className="heroControls mobileOnly">
          <div className="dotsNavigation">
            {movies.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => e.key === 'Enter' && setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
