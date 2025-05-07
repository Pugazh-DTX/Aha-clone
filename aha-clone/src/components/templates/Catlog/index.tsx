"use client";

import React, { useState } from "react";
import HeroBanner from "../../../components/organisms/HeroBanner";
import SliderCarousel from "@/components/organisms/SliderCarousel";
import { Container } from "@/types/ahaTypes";

interface CatlogProps {
  tabContainers: Container[];
  loading: boolean;
  error?: string | null;
}

const Catlog = ({ tabContainers, loading, error }: CatlogProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Early return for error state
  if (error) {
    return (
      <div className="error-state">
        <p>Failed to load content</p>
        <p className="error-detail">{error}</p>
      </div>
    );
  }

  // Early return for empty state (not loading)
  if (!loading && tabContainers.length === 0) {
    return <div className="empty-state">No content available</div>;
  }

  return (
    <div className="catlog-container">
      {tabContainers.map((container: Container) => {
        // Skip containers with no resources
        if (!container.resources || container.resources.length === 0) {
          return null; // Skip empty containers
        }

        // Loading placeholder for smoother infinite scroll
        if (loading && container === tabContainers[tabContainers.length - 1]) {
          return (
            <div
              key={`loading-${container.id}`}
              className="loading-placeholder"
            >
              Loading more content...
            </div>
          );
        }

        return container.layoutType === "banner" ? (
          <HeroBanner
            key={`banner-${container.id}`}
            resources={container.resources}
            onThumbnailClick={setActiveIndex}
            activeIndex={activeIndex}
          />
        ) : (
          <SliderCarousel
            key={`carousel-${container.id}`}
            container={container}
          />
        );
      })}
    </div>
  );
};

export default Catlog;
