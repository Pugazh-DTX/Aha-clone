"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchLanding, setPageNumber } from "@/store/slices/landingSlice";
import { AhaAdapter } from "@/adapters/ahaAdapter";
import Catlog from "@/components/templates/Catlog";
import { Container, Tab } from "@/types/ahaTypes";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentTabContainers, setCurrentTabContainers] = useState<Container[]>(
    []
  );
  const [currentTabIndex] = useState<number>(0); // static for now
  const observerRef = useRef<HTMLDivElement | null>(null);

  const { configData } = useSelector((state: RootState) => state.config);
  const { landingData, loading, pageNumber, hasMore } = useSelector(
    (state: RootState) => state.landing
  );

  useEffect(() => {
    if (configData && pageNumber === 1) {
      dispatch(fetchLanding());
    }
  }, [configData]);

  useEffect(() => {
    if (pageNumber > 1) {
      console.log("Fetching page", pageNumber); // 👈 Log this
      dispatch(fetchLanding());
    }
  }, [pageNumber]);

  const adaptedContainer: Tab[] = useMemo(() => {
    return landingData?.data ? AhaAdapter(landingData.data, "te") : [];
  }, [landingData?.data]);

  useEffect(() => {
    if (adaptedContainer.length > 0) {
      const currentTab = adaptedContainer[currentTabIndex];
      setCurrentTabContainers((prev) => [
        ...prev,
        ...(currentTab.containers || []),
      ]);
    }
  }, [adaptedContainer, currentTabIndex]);

  // 👇 Infinite Scroll Observer (No UI)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        console.log("Observer Triggered:", firstEntry.isIntersecting); // 🧪 Log this
        if (firstEntry.isIntersecting && !loading && hasMore) {
          // Instead of using a function to increment the pageNumber, directly use the new value.
          dispatch(setPageNumber(pageNumber + 1));
        }
      },
      { threshold: 0.8 }
    );

    const currentObserverRef = observerRef.current;
    if (currentObserverRef) {
      observer.observe(currentObserverRef);
    }

    return () => {
      if (currentObserverRef) observer.unobserve(currentObserverRef);
    };
  }, [loading, hasMore, pageNumber]); // Add pageNumber as a dependency to track its updates

  console.log("Scroll Trigger: ", { loading, hasMore, pageNumber });

  return (
    <div className="home-page-wrapper">
      <Catlog tabContainers={currentTabContainers} loading={loading} />
      <div ref={observerRef} style={{ height: "1px" }} />
    </div>
  );
};

export default HomePage;
