"use client";
import React, { useEffect } from "react";
import "./styles.scss";
import { Button } from "@/components/atoms";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import {
  hideFooter,
  hideHeader,
  showFooter,
  showHeader,
} from "@/store/slices/layoutSlice";
const OffersPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(hideHeader());
    dispatch(hideFooter());
    return () => {
      dispatch(showHeader());
      dispatch(showFooter());
    };
  }, []);

  const handleClick = () => {
    router.push("/subscription/viewplans");
  };
  return (
    <section className="offer-page-section">
      <div className="offer-page-img"></div>
      <div style={{ marginTop: "3%" }}>
        <Button wrapperClass="offer-page-button" onClick={handleClick}>
          Subscribe to aha GOLD
        </Button>
      </div>
    </section>
  );
};

export default OffersPage;
