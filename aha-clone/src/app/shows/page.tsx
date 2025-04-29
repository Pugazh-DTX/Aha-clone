"use client";
import { MovieCastList } from "@/components/molecules/MovieCastList";
import "./styles.scss";
import React from "react";
import {
  castList,
  movieCardDetail,
  movieDetailBanner,
  movieDetailList,
  movieTab,
  season,
} from "@/utils/MovieDetail";
import { MovieDetailCard } from "@/components/molecules/MovieDetailCard";
import { MovieDetailList } from "@/components/molecules/MovieDetailList";
import { MovieDetailTab } from "@/components/molecules/MovieDetailTab";
import { MovieDetailBanner } from "@/components/organisms/MovieDetailBanner";
import { SeasonDropdown } from "@/components/atoms/SeasonDropdown";
import HorizontalListHeader from "@/components/molecules/HorizontalListHeader";
import SliderCarousel from "@/components/organisms/SliderCarousel";

const MovieDetail = () => {
  return (
    <section>
      <MovieDetailBanner data={movieDetailBanner} />
      <MovieDetailTab tabs={movieTab} />
      <SeasonDropdown seasons={season} />
      <MovieCastList data={castList} />
      <MovieDetailList data={movieDetailList} />
      {movieCardDetail.map((movie, index) => (
        <MovieDetailCard key={index} data={movie} />
      ))}
      {/* <SliderCarousel container={} /> */}
    </section>
  );
};

export default MovieDetail;
