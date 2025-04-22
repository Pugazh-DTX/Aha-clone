"use client";

import React, { useState } from "react";
import HeroBanner from "@/components/organisms/HeroBanner";
import SliderCarousel from "@/components/organisms/SliderCarousel";
import { Container} from "@/types/ahaTypes";


interface CatlogProps {
    tabContainers: Container[];
    loading: boolean;
}

const Catlog = ({tabContainers, loading}: CatlogProps) => {
 
 const [activeIndex, setActiveIndex] = useState<number>(0);


  return (
    <div className="catlog-container">
      {loading && <div className="loading">Loading...</div>}

      {!loading &&
        tabContainers.length > 0 &&
        tabContainers.map((container: Container, i: number) => {
          if (container.layoutType === "banner") {
            return (
              <HeroBanner
                key={`banner-${container.id}`}
                resources={container.resources}
                onThumbnailClick={setActiveIndex}
                activeIndex={activeIndex}
              />
            );
          }
        
          return (
            <SliderCarousel
              key={container.id}
              container={container}
            />
          );
        })}
    </div>
  );
};

export default Catlog;
