"use client";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { hideFooter } from "@/store/slices/layoutSlice";
import { Button } from "@/components/atoms";
import teluguActor from "../../../public/Assets/images/LanguagePage/lang-telugu-actor.png";
import tamilActor from "../../../public/Assets/images/LanguagePage/lang-tamil-actor.png";
import activeIcon from "../../../public/Assets/icons/LanguagePage/language-select-icon-active.svg";
import inactiveIcon from "../../../public/Assets/icons/LanguagePage/language-select-icon-inactive.svg";
import Image from "next/image";
const LanguagePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Telugu");
  const [displayLanguage, setDisplayLanguage] = useState("English");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideFooter());
  });
  return (
    <div className="language-container">
      <div className="language-selection-card">
        {/* Left section */}
        <div className="language-left-section">
          <h3>
            Watch <span className="language-highlight">100%</span> content in
          </h3>
          <div
            className={`language-language-card ${
              selectedLanguage === "Telugu" ? "language-active" : ""
            }`}
            onClick={() => setSelectedLanguage("Telugu")}
          >
            <div className="language-language-info">
              <div
                className={`language-check-circle ${
                  selectedLanguage === "Telugu" ? "icon-active" : ""
                }`}
              >
                ✓
              </div>
              <span className="language-native-language">ఆహా</span>
              <span className="language-language-name">Telugu</span>
            </div>
            <Image
              src={teluguActor}
              alt="Telugu Actor"
              className="language-actor-image"
              width={200}
              height={105}
            />
          </div>
          <div
            className={`language-language-card ${
              selectedLanguage === "Tamil" ? "language-active" : ""
            }`}
            onClick={() => setSelectedLanguage("Tamil")}
          >
            <div className="language-language-info">
              <div
                className={`language-check-circle ${
                  selectedLanguage === "Tamil" ? "icon-active" : ""
                }`}
              >
                ✓
              </div>
              <span className="language-native-language">ஆஹா</span>
              <span className="language-language-name">Tamil</span>
            </div>
            <Image
              src={tamilActor}
              alt="Tamil Actor"
              className="language-actor-image"
              width={100}
              height={105}
            />
          </div>
        </div>

        {/* Right section */}
        <div className="language-right-section">
          <h3>Choose Display Language {displayLanguage}</h3>
          <div className="language-language-toggle">
            <button
              className={`language-toggle-btn ${
                displayLanguage === "English" ? "language-active" : ""
              }`}
              onClick={() => setDisplayLanguage("English")}
            >
              English
            </button>
            <button
              className={`language-toggle-btn ${
                displayLanguage === "Telugu" ? "language-active" : ""
              }`}
              onClick={() => setDisplayLanguage("Telugu")}
            >
              తెలుగు
            </button>
          </div>
          <Button wrapperClass="language-proceed-btn">Proceed</Button>
        </div>
      </div>
    </div>
  );
};

export default LanguagePage;
