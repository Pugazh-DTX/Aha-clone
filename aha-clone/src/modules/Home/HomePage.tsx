// src/components/organisms/HeroBanner/HeroBannerWrapper.tsx

"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { fetchLanding } from "@/store/slices/landingSlice";
import { AhaAdapter } from "@/adapters/ahaAdapter";
import HeroBanner from "@/components/organisms/HeroBanner/HeroBanner";
import { IHeroMovie } from "@/types/movie";

const HeroBannerWrapper: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { configData } = useSelector((state: RootState) => state.config);
  const { landingData, loading, error } = useSelector(
    (state: RootState) => state.landing
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (configData && !landingData) {
      dispatch(fetchLanding());
    }
  }, [configData, landingData, dispatch]);

  console.log("landingData:", landingData);

  const heroMovies: IHeroMovie[] = useMemo(() => {
    if (landingData) {
      const transformed = AhaAdapter(landingData.data);
      const firstContainer = transformed?.[0]?.containers?.[0];

      return (
        firstContainer?.resources.map((resource) => ({
          thumbnail: resource.thumbnail,
          year: resource.year,
          length: resource.length,
          genre: resource.genre,
          description: resource.description,
          posterUrl: resource.posterUrl,
          id: resource.id,
          type: resource.type,
          title: resource.title,
          urn: resource.urn,
        })) || []
      );
    }
    return [];
  }, [landingData]);

  if (loading) return <div>Loading hero banner...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!heroMovies.length) return <div>No movies found</div>;

  return (
    <HeroBanner
      movies={heroMovies}
      activeIndex={activeIndex}
      onThumbnailClick={setActiveIndex}
    />
  );
};

export default HeroBannerWrapper;
