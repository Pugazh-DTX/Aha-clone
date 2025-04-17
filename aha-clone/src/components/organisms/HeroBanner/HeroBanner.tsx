'use client';

import React, { useEffect, useState, useRef } from 'react';
import './styles.scss';
import { IHeroMovie } from '@/types/movie';

interface HeroBannerProps {
  movies: IHeroMovie[];
  onThumbnailClick: (index: number) => void;
  activeIndex: number;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ movies, onThumbnailClick, activeIndex }) => {
  const visibleSlides = 3;
  const [currentIndex, setCurrentIndex] = useState(activeIndex);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const thumbnailWidth = 110;
  const transitionDuration = 600;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, movies.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % movies.length);
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
      const index = (currentIndex + i + movies.length) % movies.length;
      visible.push({ ...movies[index], originalIndex: index });
    }
    return visible;
  };

  const activeMovie = movies[currentIndex];
  
  console.log('Active Movie:', activeMovie);
  console.log('Thumbnails:', getVisibleThumbnails());
  return (
    <div className="heroContainer">
      <div
        className="heroBackground"
        style={{ backgroundImage: `url(${activeMovie.posterUrl})` }}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          touchEndX.current = e.changedTouches[0].clientX;
          handleSwipe();
        }}
      >
        <div className="linear">
          <div className="heroOverlay">
            <div className="details">
              <h1 className="title">{activeMovie.title?.en}</h1>
              <p className="meta">
                {activeMovie.year} • {activeMovie.length} • {activeMovie.genre.map((g) => g.en.trim()).join(' • ')}
              </p>
              <p className="description">{activeMovie.description?.en}</p>
            </div>

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
                    src={movies[(currentIndex - 1 + movies.length) % movies.length].thumbnail}
                    alt="prev"
                    className="thumbnail"
                  />

                  {getVisibleThumbnails().map((movie) => (
                    <img
                      key={movie.originalIndex}
                      src={movie.thumbnail}
                      alt={movie.title?.en}
                      className={`thumbnail ${movie.originalIndex === currentIndex ? 'active' : ''}`}
                      onClick={() => onThumbnailClick(movie.originalIndex)}
                    />
                  ))}

                  <img
                    src={movies[(currentIndex + 1) % movies.length].thumbnail}
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

        <div className="heroControls mobileOnly">
          <div className="dotsNavigation">
            {movies.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => e.key === 'Enter' && setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
