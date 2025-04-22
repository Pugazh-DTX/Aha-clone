"use client";
import React from "react";
import "./styles.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/Assets/icons/Logo.svg";
import { useRouter } from "next/navigation";

type OfferLayoutProps = {
  children: React.ReactNode;
};

const OfferLayout = ({ children }: OfferLayoutProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      <div className="offer-header-layout">
        <div className="offer-logo" onClick={handleClick}>
          <Image
            src={logo}
            alt="Aha Logo"
            priority
            className="offer-logo-img"
          />
        </div>
        <div className="offer-page-mob-header">
          <div
            className="offer-page-arrow-icon cursor-pointer"
            style={{ width: "12px", height: "24px" }}
            onClick={handleClick}
          ></div>
          <h1 className="offer-page-header-text">Offers</h1>
        </div>
      </div>
      {children} {/* <- important to render the page content */}
    </div>
  );
};

export default OfferLayout;
