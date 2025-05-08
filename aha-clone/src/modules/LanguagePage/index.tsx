"use client";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useDispatch } from "react-redux";
import {
  hideFooter,
  hideHeader,
  showFooter,
  showHeader,
} from "@/store/slices/layoutSlice";
import { Button } from "@/components/atoms";
import teluguActor from "../../../public/Assets/images/LanguagePage/lang-telugu-actor.png";
import tamilActor from "../../../public/Assets/images/LanguagePage/lang-tamil-actor.png";
import ContentLanguageSelector from "@/components/molecules/ContentLanguageSelector";
import DisplayLanguageSelector from "@/components/molecules/DisplayLanguageSelector";
import { setLanguage, setDisplayLanguage } from "@/store/slices/languageSlice";
import { useRouter } from "next/navigation";
import { fetchLanding } from "@/store/slices/landingSlice";
import { AppDispatch } from "@/store/store";
import { getLanguageCode } from "../../utils/GetLanguageCode";
const LanguagePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem("selectedLanguage") || "Telugu";
  });
  // console.log(selectedLanguage, "selectedLanguage");
  const [localDisplayLang, setLocalDisplayLang] = useState(() => {
    return localStorage.getItem("displayLanguage") || "English";
  });
  // console.log(localDisplayLang, "localDisplayLang");
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 960) {
        dispatch(hideHeader()); // Hide header below 960px
      } else {
        dispatch(showHeader()); // Show header above 960px
      }
      dispatch(hideFooter()); // Always hide footer
    };

    handleResize(); // Call once on mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      dispatch(showHeader());
      dispatch(showFooter()); // reset on unmount
    };
  }, [dispatch]);

  useEffect(() => {
    const acl = selectedLanguage === "Tamil" ? "ta" : "te";
    dispatch(setLanguage(acl));
    dispatch(fetchLanding());
    // Save to localStorage
    localStorage.setItem("selectedLanguage", selectedLanguage);
    // If display language is Tamil or Telugu, update it to match selected language
    if (localDisplayLang === "Tamil" || localDisplayLang === "Telugu") {
      setLocalDisplayLang(selectedLanguage);
      localStorage.setItem("displayLanguage", selectedLanguage);
      dispatch(setDisplayLanguage(getLanguageCode(selectedLanguage)));
    }
    // console.log(acl, "acl");
  }, [selectedLanguage]);
  // console.log(localDisplayLang, "-display");
  // console.log(selectedLanguage, "-Selecteddisplay");

  const handleDisplayLanguageChange = (lang: string) => {
    setLocalDisplayLang(lang);
    localStorage.setItem("displayLanguage", lang);
    dispatch(setDisplayLanguage(getLanguageCode(lang)));
  };

  return (
    <div className="language-container">
      <div className="language-selection-card">
        {/* Left section */}
        <div className="language-left-section">
          <h3 className="language-left-section-heading">
            Watch <span className="language-highlight">100%</span> content in
          </h3>
          <ContentLanguageSelector
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={() => setSelectedLanguage("Telugu")}
            actorImgSrc={teluguActor}
            language={"Telugu"}
            nativeLabel={"ఆహా"}
          />
          <ContentLanguageSelector
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={() => setSelectedLanguage("Tamil")}
            actorImgSrc={tamilActor}
            language={"Tamil"}
            nativeLabel={"ஆஹா"}
          />
        </div>

        {/* Right section */}
        <div className="language-right-section">
          <h3 className="language-right-section-heading">
            Choose Display Language {localDisplayLang}
          </h3>

          <DisplayLanguageSelector
            selectedLanguage={selectedLanguage}
            displayLanguage={localDisplayLang}
            setDisplayLang={handleDisplayLanguageChange}
          />
          <Button
            wrapperClass="language-proceed-btn"
            onClick={() => router.push("/")}
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LanguagePage;
