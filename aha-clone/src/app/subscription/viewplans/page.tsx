import React from "react";
import "./styles.scss";
import SubscribeCard from "../../../components/molecules/SubscribeCard";
import { subscriptionPlans } from "@/utils/ViewPlans/viewplans";
import { subsPagePlatforms } from "@/utils/ViewPlans/viewplansplatforms";
const ViewPlans = () => {
  return (
    <section className="subs-page-parent-container">
      <div className="subs-page-container">
        <div className="subs-page-header-container">
          <div
            className="subs-page-arrow-icon cursor-pointer"
            style={{ width: "20px", height: "20px" }}
          ></div>
          <h1 className="subs-page-header-text">Choose a Plan</h1>
        </div>
        <div className="subscription-page-cards-container">
          {subscriptionPlans.map((plan, index) => {
            return (
              <div key={index}>
                <SubscribeCard plan={plan} />
              </div>
            );
          })}
        </div>
        <div className="subs-page-mob-signin">
          <p className="subs-page-mob-signin-text-container">
            Already have an account user?{" "}
            <span className="subs-page-mob-signin-text cursor-pointer">
              Sign In <span className="subs-page-mob-signin-arrow"></span>
            </span>
          </p>
        </div>
        <div className="subs-page-footer-platforms">
          {subsPagePlatforms.map((platform, index) => {
            return (
              <div
                key={index}
                style={{
                  width: platform.width,
                  height: platform.height,
                  backgroundImage: `url(${platform.platformImg.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="subs-page-platform-img"
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ViewPlans;
