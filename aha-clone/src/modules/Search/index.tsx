"use client";
import React, { useEffect } from "react";
import "./styles.scss";
import { searchData } from "../../utils/Search/search";
import Card from "@/components/molecules/Card";
import { useDispatch } from "react-redux";
import {
  hideFooter,
  hideHeader,
  showFooter,
  showHeader,
} from "@/store/slices/layoutSlice";
const SearchPage = () => {
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
      dispatch(showFooter());
    };
  }, [dispatch]);

  return (
    <section>
      <div className="search-page-container">
        {/* Recent Searches */}

        {searchData.recentSearchList.length > 0 && (
          <div>
            <h5 className="search-page-heading-text">Recent Searches</h5>
            <ul className="search-page-recent-search-list">
              {searchData.recentSearchList.map((search, index) => {
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
        {searchData.isShowingResults && (
          <div>
            <p className="search-page-heading-text search-page-showing-result-text">
              Showing Results for{" "}
              <span className="search-page-heading-text">Kavacham</span>
            </p>
          </div>
        )}
        {/* Trending Searches */}
        {!searchData.isSearchNotFound && !searchData.isShowingResults && (
          <h5 className="search-page-heading-text">Trending Searches</h5>
        )}
        <div className="search-cards-container">
          {searchData.moviesArr.map((movie, index) => {
            return (
              <div key={index}>
                <Card
                  isCastCard={false}
                  isNoHoverAnimate={true}
                  footerTitle={movie.movieTitle}
                  imageSrc={movie.movieImg}
                  aspectRatio={"16/9"}
                  cardWidth="212px"
                  isRoundedImage={false}
                  overlayPlayIcon={false}
                  isAdultContent={false}
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

export default SearchPage;
