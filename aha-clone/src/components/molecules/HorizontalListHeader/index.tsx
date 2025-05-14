import React from "react";
import "./styles.scss";
const HorizontalListHeader = ({
  sectionTitle,
  containerLength,
  isLive,
  isNew,
}: {
  sectionTitle: string;
  containerLength: number;
  isLive?: boolean;
  isNew?: boolean;
}) => {
  return (
    <section>
      <div className="h-list-container">
        <div className="m-0 h-list-left-container">
          <p>{sectionTitle}</p>
          <div className="h-list-tag-container">
            {isNew && (
              <div className="h-list-new-tag">
                <p className="h-list-new-text">New</p>
              </div>
            )}
            {isLive && (
              <div className="h-list-live-tag">
                <div className="h-list-live-tag-point"></div>
                <p className="h-list-live-text">LIVE</p>
              </div>
            )}
          </div>
        </div>
        <div className="cursor-pointer">
          {containerLength >= 20 ? "See all" : ""}
        </div>
      </div>
    </section>
  );
};

export default HorizontalListHeader;
