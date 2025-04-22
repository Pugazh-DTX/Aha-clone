"use client";

import React from "react";
import "./styles.scss";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  hideFooter,
  hideHeader,
  setOnlyShowLogo,
  showFooter,
  showHeader,
} from "@/store/slices/layoutSlice";
import SubscribeCard from "../../../components/molecules/SubscribeCard";
import { subscriptionPlans } from "@/utils/ViewPlans/viewplans";
import { subsPagePlatforms } from "@/utils/ViewPlans/viewplansplatforms";
import { useRouter } from "next/navigation";

const ViewPlans = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    // function to check window width and update header
    const handleResize = () => {
      if (window.innerWidth <= 959) {
        dispatch(hideHeader());
      } else {
        dispatch(showHeader());
        dispatch(setOnlyShowLogo(true)); // ✅ Only show logo on this page
      }
      dispatch(hideFooter());
    };
    handleResize(); // run once immediately when component mounts

    window.addEventListener("resize", handleResize);
    // Optional: when page unmounts (user navigates away), show again
    return () => {
      window.removeEventListener("resize", handleResize);
      dispatch(showHeader());
      dispatch(setOnlyShowLogo(false)); // ✅ Reset when leaving page
      dispatch(showFooter());
    };
  }, [dispatch]);

  const handleClick = () => {
    router.back();
  };

  return (
    <section
      className="subs-page-parent-container"
      style={{ minHeight: "100vh", height: "100%", width: "100%" }}
    >
      <div className="subs-page-container">
        <div className="subs-page-header-container">
          <div
            className="subs-page-arrow-icon cursor-pointer"
            style={{ width: "20px", height: "20px" }}
            onClick={handleClick}
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
