"use client";
import React, { useEffect } from "react";
import "./styles.scss";
import { searchData } from "../../../utils/Search/search";
import Card from "@/components/molecules/Card";
import { useDispatch } from "react-redux";

import {
  hideFooter,
  hideHeader,
  showFooter,
  showHeader,
} from "@/store/slices/layoutSlice";
import { Resource } from "@/types/ahaTypes";
const SearchCat = ({
  resource,
  source,
  query,
  recentSearch,
}: {
  resource: Resource[];
  source: string;
  query: string;
  recentSearch: string[];
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        dispatch(hideHeader()); // Hide header below 900px
      } else {
        dispatch(showHeader()); // Show header above 900px
      }
      dispatch(hideFooter()); // Always hide footer
    };

    handleResize(); // Call once on mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      dispatch(showHeader());
      dispatch(showFooter()); // reset on unmount
    };
  }, [dispatch]);

  console.log(resource.length, "--length--");
  console.log(source, "--source--");
  console.log(recentSearch, "RARR-");
  return (
    <section>
      <div className="search-page-container">
        {/* Recent Searches */}

        {resource.length > 0 &&
          recentSearch.length > 0 &&
          source === "initial" && (
            <div>
              <h5 className="search-page-heading-text">Recent Searches</h5>
              <ul className="search-page-recent-search-list">
                {recentSearch.slice(0, 3).map((search, index) => {
                  return (
                    <li
                      className="search-page-recent-search-list-child cursor-pointer"
                      key={index}
                    >
                      <a style={{ color: "#fa672b" }}> {search}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        {/* Search Not Found */}
        {searchData.isSearchNotFound && (
          <div className="search-not-found-container">
            <h5 className="search-page-heading-text">Search Not Found</h5>
            <p>
              Did you mean?{" "}
              <span className="search-page-did-mean-movie">Krack</span>
            </p>
          </div>
        )}
        {/*Trending Search & Showing Results & Search not found */}
        {resource.length > 0 &&
        source === "search" &&
        query.trim().length > 2 ? (
          <div>
            <p className="search-page-heading-text search-page-showing-result-text">
              Showing Results for{" "}
              <span className="search-page-heading-text">{query}</span>
            </p>
          </div>
        ) : resource.length > 0 ? (
          <h5 className="search-page-heading-text">Trending Searches</h5>
        ) : (
          <h5 className="search-page-heading-text">Search Not Found</h5>
        )}

        <div className="search-cards-container">
          {resource?.map((movie, index) => {
            return (
              <div key={index}>
                <Card
                  isCastCard={false}
                  isNoHoverAnimate={true}
                  footerTitle={movie.title}
                  imageSrc={movie.images.searchImg}
                  aspectRatio={"16/9"}
                  cardWidth="212px"
                  isPremium={movie.ispremium}
                  isRoundedImage={false}
                  overlayPlayIcon={false}
                  isAdultContent={movie.is_adult_content}
                  isContinueWatching={false}
                  totalTimeDuration={""}
                  watchTimeDuration={""}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SearchCat;
