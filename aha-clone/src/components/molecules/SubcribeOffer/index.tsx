import React from "react";
import "./styles.scss";
import Image from "next/image";
import offerPercIcon from "../../../../public/Assets/icons/SubscribeCard/offer-percentage.svg";
import arrowRight from "../../../../public/Assets/icons/Card/arrow-right.svg";
const SubscribeOfferTag = () => {
  return (
    <div className="flex-jc-ac">
      <div className="subs-offer-tag-bg">
        <div className="subs-offer-tag-left">
          <div style={{ width: "24px", height: "24px" }}>
            <Image src={offerPercIcon} alt={""} />
          </div>
          <p className="subs-offer-tag-left-text">
            Flat 100 off | Use{" "}
            <span style={{ fontWeight: "600" }}>FESTIVE 10</span>
          </p>
        </div>
        <div className="subs-page-tag-right">
          <p className="subs-offer-tag-left-text" style={{ fontWeight: "600" }}>
            +2 offers
          </p>
          <div className="sub-offer-tag-arrow cursor-pointer">
            {/* <Image src={arrowRight} alt={""} className="image-style" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeOfferTag;
