import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./styles.scss";
import Image from "next/image";
import Card from "@/components/molecules/Card";
import { Container, Resource } from "@/types/ahaTypes";
import arrowLeft from "../../../../public/Assets/icons/Card/arrow-left.svg";
import arrowRight from "../../../../public/Assets/icons/Card/arrow-right.svg";
import HorizontalListHeader from "@/components/molecules/HorizontalListHeader";

interface SliderCarouselProps {
  container: Container;
}

const SliderCarousel: React.FC<SliderCarouselProps> = ({ container }) => {
  const resources = container.resources;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const checkScrollPosition = () => {
    const slider = sliderRef.current;
    if (slider) {
      const { scrollLeft, scrollWidth, clientWidth } = slider;
      setShowPrev(scrollLeft > 0);
      setShowNext(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  const scroll = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (slider) {
      const scrollAmount = slider.clientWidth;
      slider.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useLayoutEffect(() => {
    const slider = sliderRef.current;
    let resizeTimeout: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        checkScrollPosition();
      }, 100);
    };

    checkScrollPosition();
    slider?.addEventListener("scroll", checkScrollPosition);

    // Using ResizeObserver to track size changes of the slider
    let resizeObserver: ResizeObserver | null = null;

    if (slider) {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(slider);
    }

    return () => {
      slider?.removeEventListener("scroll", checkScrollPosition);
      resizeObserver?.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <section>
      <HorizontalListHeader
        sectionTitle={container.title}
        containerLength={resources.length}
      />
      <div className="carousel-wrapper">
        {showPrev && (
          <div className="icon-position prev">
            <Image
              sizes="30"
              onClick={() => scroll("left")}
              className="cursor-pointer"
              src={arrowLeft}
              alt="Previous"
            />
          </div>
        )}
        <div className="slider-container" ref={sliderRef}>
          {resources.map((resource, index) => {
            const validKey =
              typeof resource.id === "number" && !isNaN(resource.id)
                ? resource.id
                : `${resource.title?.en || "movie"}-${index}`;

            return (
              <div key={validKey}>
                <Card
                  isCastCard={false}
                  isContinueWatching={false}
                  footerTitle={resource.title}
                  imageSrc={resource.carouselthumbnail}
                  isPremium={resource.ispremium}
                  cardWidth="160px"
                  aspectRatio="2/3"
                  isRoundedImage={false}
                  overlayPlayIcon={false}
                  isAdultContent={resource.is_adult_content}
                  totalTimeDuration=""
                  watchTimeDuration=""
                />
              </div>
            );
          })}
        </div>
        {showNext && (
          <div className="icon-position next">
            <Image
              sizes="30"
              onClick={() => scroll("right")}
              className="cursor-pointer"
              src={arrowRight}
              alt="Next"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default SliderCarousel;
