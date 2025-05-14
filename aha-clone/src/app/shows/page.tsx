"use client";
import Card from "@/components/molecules/Card";
import "./styles.scss";
import React, { useState } from "react";
import liveTv from "../../../public/Assets/images/Card/live-tv.png";
const Shows = () => {
  return (
    <div>
      <h1 style={{ marginBottom: "100px" }}>Shows</h1>
      <Card
        isCastCard={false}
        isFooterTitle={false}
        footerTitle={"hello"}
        imageSrc={liveTv}
        aspectRatio={"1/1"}
        isRoundedImage={true}
        overlayPlayIcon={false}
        isAdultContent={true}
        isContinueWatching={false}
        totalTimeDuration={""}
        watchTimeDuration={""}
        isPremium={false}
        overlayText=""
        isAhaTag={false}
        isDaysToGo={false}
        daysToGo="2 days to go"
        isLiveTv
      />
    </div>
  );
};

export default Shows;
