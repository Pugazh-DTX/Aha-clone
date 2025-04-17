'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { fetchLanding } from '@/store/slices/landingSlice';
import { AhaAdapter } from '@/adapters/ahaAdapter';
import HeroBanner from '@/components/organisms/HeroBanner/HeroBanner';
import { IHeroMovie } from '@/types/movie';

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { configData, loading: configLoading, error: configError } = useSelector(
    (state: RootState) => state.config
  );
  const { landingData, loading: landingLoading, error: landingError } = useSelector(
    (state: RootState) => state.landing
  );

  useEffect(() => {
    if (configData && !landingData) {
      console.log('📡 Config available, fetching landing...');
      dispatch(fetchLanding());
    }
  }, [configData, landingData, dispatch]);

  useEffect(() => {
    if (landingData) {
      console.log('🛬 Raw landingData:', landingData);
    }
  }, [landingData]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  

  const heroMovies: IHeroMovie[] = useMemo(() => {
    if (landingData) {
      const transformed = AhaAdapter(landingData.data);
      console.log('⚙️ Adapted Data from AhaAdapter:', transformed);

      const firstTab = transformed?.[0];
      const firstContainer = firstTab?.containers?.[0];

      const movieList = firstContainer?.resources.map((resource) => ({
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
      })) || [];

      console.log('🎬 Final heroMovies:', movieList);

      return movieList;
    }
    return [];
  }, [landingData]);

  if (configLoading || landingLoading) return <div>Loading...</div>;
  if (configError || landingError) return <div>Error: {configError || landingError}</div>;
  if (!heroMovies.length) return <div>No hero movies available</div>;

  return (
    <div>
      <HeroBanner
        movies={heroMovies}
        activeIndex={activeIndex}
        onThumbnailClick={handleThumbnailClick}
      />
      
    </div>
  );
};

export default HomePage;
