import React from "react";
import Image from "next/image";
import "./styles.scss";
import ahaGold from "../../../../public/Assets/icons/SubscribeCard/aha-gold-plan.svg";
import clockIcon from "../../../../public/Assets/icons/SubscribeCard/clock-icon.svg";
import tamilLetterBg from "../../../../public/Assets/icons/SubscribeCard/letter-tamil-subs-card.svg";
import teluguLetterBg from "../../../../public/Assets/icons/SubscribeCard/letter-telugu-subs-card.svg";
import { Button } from "@/components/atoms";
import { ISubscriptionPlans } from "@/utils/ViewPlans/viewplans";
import subscriptionCard from "../../../../public/Assets/images/SubscriptionPagePlatforms/subscription-card.png";

const SubscribeCard = ({ plan }: { plan: ISubscriptionPlans }) => {
  return (
    <section className="subscribe-card-parent">
      <div className="subscribe-card">
        <div>
          <Image src={subscriptionCard.src} alt={"card"} fill />
        </div>
        {!plan.isGoldPack && (
          <div className="subscribe-card-letter-bg">
            <Image
              src={`${
                plan.language === "telugu"
                  ? teluguLetterBg.src
                  : tamilLetterBg.src
              }`}
              alt={""}
              className="subscribe-card-letter-img"
              fill
            ></Image>
          </div>
        )}
        {plan.tagText && (
          <div
            className="subscribe-card-tag"
            style={{
              background: `${
                plan.isGoldPack
                  ? "linear-gradient(180deg, #e9b876 0%, #84551d 100%)"
                  : "#4ebd5e"
              }`,
            }}
          >
            <h5 className="subscribe-card-tag-text">{plan.tagText}</h5>
          </div>
        )}
        <div className="subscribe-card-content">
          <div className="subscribe-card-content-info">
            <div>
              {plan.isGoldPack ? (
                <div
                  className="aha-gold-img"
                  style={{ width: "256px", height: "20px" }}
                ></div>
              ) : (
                <div className="subscribe-card-content-title">
                  {plan.contentTitle}
                </div>
              )}

              <p className="subscribe-card-content-description">
                {plan.contentDescription}
              </p>
            </div>
          </div>
          <div className="subscribe-card-ad-free">
            <div className="offer-icon"></div>
            <p className="subscribe-card-ad-free-text">{plan.aboutAd}</p>
          </div>
          <div className="subscribe-card-content-footer">
            <div className="subscribe-card-footer-price">
              <h6 className="retail-price">
                <span>INR </span>
                {plan.retailPrice}
                <span className="price-duration"> / {plan.priceDuration}</span>
              </h6>
              <h6 className="price-before">
                <span>₹</span>
                <span
                  style={{
                    textDecoration: "line-through",
                    marginLeft: "0.2vw",
                  }}
                >
                  {plan.priceBefore}
                </span>
              </h6>
            </div>

            <Button
              wrapperClass={`subscribe-card-button ${
                plan.isGoldPack ? "gold-button" : "orange-button"
              }`}
              style={{
                background: `${
                  plan.isGoldPack
                    ? "linear-gradient(180deg, #f3c17d -.9%, #84551d 99.1%)"
                    : "linear-gradient(0deg, #b61a09 -86.4%, #ff6d2e)"
                }`,
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeCard;
