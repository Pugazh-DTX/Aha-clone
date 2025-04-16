import React from "react";
import "./styles.scss";
const HorizontalListHeader = ({
  sectionTitle,
  containerLength,
}: {
  sectionTitle: string;
  containerLength: number;
}) => {
  return (
    <section>
      <div className="h-list-container">
        <div className="m-0">{sectionTitle}</div>
        <div className="cursor-pointer">
          {containerLength >= 20 ? "See all" : ""}
        </div>
      </div>
    </section>
  );
};

export default HorizontalListHeader;
