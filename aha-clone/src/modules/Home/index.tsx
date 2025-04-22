'use client';

import React, { useEffect, useMemo} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchLanding } from "@/store/slices/landingSlice";
import { AhaAdapter } from "@/adapters/ahaAdapter";
import Catlog from '@/components/templates/Catlog';
import { Container, Tab } from "@/types/ahaTypes";

const HomePage = () => {
 
  const dispatch = useDispatch<AppDispatch>();

  const { configData } = useSelector((state: RootState) => state.config);
  const { landingData, loading, error } = useSelector((state: RootState) => state.landing);


  useEffect(() => {
    if (configData) {
      dispatch(fetchLanding());
    }
  }, [configData]);

  const adaptedContainer: Tab[] = useMemo(() => {
    let tabs: Tab[] = [];
    if (landingData?.data) {
      tabs = AhaAdapter(landingData?.data);
    }
    return tabs;
  }, [landingData?.data, configData]);

  const currentTabContainers: Container[] =
    adaptedContainer.length > 0 ? adaptedContainer[0].containers : [];


  return (
    <div className='home-page-wrapper'>
      <Catlog tabContainers={currentTabContainers} loading={loading} />
    </div>
  );
};

export default HomePage;
