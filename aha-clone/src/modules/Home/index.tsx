'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchLanding, setPageNumber } from "@/store/slices/landingSlice";
import { AhaAdapter } from "@/adapters/ahaAdapter";
import Catlog from '@/components/templates/Catlog';
import { Container, Tab } from "@/types/ahaTypes";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentTabContainers, setCurrentTabContainers] = useState<Container[]>([]);
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  const { configData } = useSelector((state: RootState) => state.config);
  const { landingData, loading, error, pageNumber } = useSelector((state: RootState) => state.landing);

  // Initial fetch when config is ready
  useEffect(() => {
    if (configData && pageNumber === 1) {
      dispatch(fetchLanding());
    }
  }, [configData]);

  // Pagination fetch
  useEffect(() => {
    if (pageNumber > 1) {
      dispatch(fetchLanding());
    }
  }, [pageNumber]);

  const adaptedContainer: Tab[] = useMemo(() => {
    return landingData?.data ? AhaAdapter(landingData.data) : [];
  }, [landingData?.data]);

  useEffect(() => {
    if (adaptedContainer.length > 0) {
      const currentTab = adaptedContainer[currentTabIndex];
      setCurrentTabContainers(prev => [...prev, ...currentTab.containers || []]);
    }
  }, [adaptedContainer, currentTabIndex]);

  return (
    <div className='home-page-wrapper'>
      <Catlog tabContainers={currentTabContainers} loading={loading} />
      <button onClick={() => dispatch(setPageNumber(pageNumber + 1))}>Load More</button>
    </div>
  );
};

export default HomePage;
