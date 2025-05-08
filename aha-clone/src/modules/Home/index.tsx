"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
// import { fetchLanding, setPageNumber, setStoreFrontId } from "@/store/slices/landingSlice";
import { AhaAdapter } from "@/adapters/ahaAdapter";
import Catlog from "@/components/templates/Catlog";
import { Container, Tab } from "@/types/ahaTypes";
import { useParams } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { config } from "process";
import useLandingApi from "@/hooks/useLandingApi";
import { getLanguageCode } from "../../utils/GetLanguageCode";

const HomePage = () => {
  const { tab } = useParams(); // Get current tab from URL
  const dispatch = useDispatch<AppDispatch>();
  const selectedLang =
    (typeof window !== "undefined" &&
      localStorage.getItem("selectedLanguage")) ||
    "Telugu";
  const acl = getLanguageCode(selectedLang);
  const displayLang =
    (typeof window !== "undefined" &&
      localStorage.getItem("displayLanguage")) ||
    "English";
  const displayLanguage = getLanguageCode(displayLang);
  const [currentTabContainers, setCurrentTabContainers] = useState<Container[]>(
    []
  );
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0); // Default to the first tab
  const observerRef = useRef<HTMLDivElement | null>(null);

  // const { configData } = useSelector((state: RootState) => state.config);
  // const { landingData, loading, pageNumber, hasMore } = useSelector(
  //   (state: RootState) => state.landing
  // );
  // const { acl, displayLanguage } = useSelector(
  //   (state: RootState) => state.language
  // );

  // useEffect(() => {
  //   if (configData && pageNumber === 1) {
  //     dispatch(fetchLanding());
  //   }
  // }, [configData, acl]);

  // useEffect(() => {
  //   if (pageNumber > 1) {
  //     console.log("Fetching page", pageNumber);
  //     dispatch(fetchLanding());
  //   }
  // }, [pageNumber]);
  // const { configData } = useAppSelector((state: RootState) => state.config);

  const {
    loading,
    data: landingData,
    error,
  } = useLandingApi({
    // //tamil movie tab
    // sfid: "2E553D81-94BB-4B9D-8F62-C77CFA74DCEB",
    // tid: "FD5FAD7A-DD74-4A2E-B313-D73ADB25ABA6",
    // //telugu movie tab
    // sfid: "048CC689-2187-4552-921C-8311E53B0221",
    // tid: "F2719F67-D1B4-4687-BDC8-30CE7E779556",
    acl: acl,
  });
  console.log(acl, "initialAcl");
  console.log(landingData, "landingData");
  // const { landingData, loading, pageNumber, hasMore, error, storeFrontId } = useAppSelector(
  //   (state: RootState) => state.landing
  // );

  // // Fetch data when configData is available and pageNumber is 1
  // useEffect(() => {
  //   if (configData && pageNumber === 1) {
  //     dispatch(fetchLanding());
  //   }
  // }, [configData, pageNumber]);

  // console.log(landingData)

  // // Fetch next page when pageNumber updates
  // useEffect(() => {
  //   if (pageNumber > 1) {
  //     dispatch(fetchLanding());
  //   }
  // }, [pageNumber]);

  // console.log(landingData,fetchLanding)

  // // Adapt landing data
  const adaptedContainer: Tab[] = useMemo(() => {
    return !Array.isArray(landingData)
      ? AhaAdapter(landingData, displayLanguage)
      : [];
  }, [landingData, displayLanguage]);

  // console.log(adaptedContainer)
  // console.log(AhaAdapter)

  // // Handle tab index based on URL params
  // useEffect(() => {
  //   const selectedTabIndex = adaptedContainer.findIndex(
  //     (item) => item.tab_id === tab );

  //   setCurrentTabIndex(selectedTabIndex >= 0 ? selectedTabIndex : 0);  // Set the tab index based on URL params
  // }, [tab, adaptedContainer]);

  // // Set containers for the active tab
  useEffect(() => {
    if (adaptedContainer.length > 0 && currentTabIndex >= 0) {
      const currentTab = adaptedContainer[currentTabIndex];
      setCurrentTabContainers(currentTab.containers || []);
      // dispatch(setStoreFrontId(currentTab.tab_id)); // Set the storeFrontId when tab changes
    }
  }, [adaptedContainer, currentTabIndex]);

  // // Intersection Observer for infinite scroll
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const firstEntry = entries[0];
  //       if (firstEntry.isIntersecting && !loading && hasMore) {
  //         dispatch(setPageNumber(pageNumber + 1));
  //       }
  //     },
  //     { threshold: 0.8 }
  //   );

  //   const currentObserverRef = observerRef.current;
  //   if (currentObserverRef) {
  //     observer.observe(currentObserverRef);
  //   }

  //   return () => {
  //     if (currentObserverRef) observer.unobserve(currentObserverRef);
  //   };
  // }, [loading, hasMore, pageNumber]);

  return (
    <div className="home-page-wrapper">
      {error ? (
        <div className="error-state">
          <p>Failed to load content</p>
          <p className="error-detail">{error}</p>
        </div>
      ) : (
        <Catlog tabContainers={currentTabContainers} loading={loading} />
      )}
      <div ref={observerRef} style={{ height: "1px" }} />
    </div>
  );
};

export default HomePage;
