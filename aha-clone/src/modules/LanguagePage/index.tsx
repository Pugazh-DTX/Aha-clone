"use client";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useDispatch } from "react-redux";
import Image from "next/image";
import {
  hideFooter,
  hideHeader,
  showFooter,
  showHeader,
} from "@/store/slices/layoutSlice";
import { Button } from "@/components/atoms";
import closeIcon from "../../../public/Assets/icons/LanguagePage/language-close.svg";
import teluguHero from "../../../public/Assets/images/LanguagePage/lang-telugu-hero-s.png";
import tamilHero from "../../../public/Assets/images/LanguagePage/lang-tamil-hero-s.png";
import malayalamHero from "../../../public/Assets/images/LanguagePage/lang-malayalam-hero-s.png";
import teluguNativeLang from "../../../public/Assets/icons/LanguagePage/language-telugu-aha.svg";
import tamilNativeLang from "../../../public/Assets/images/LanguagePage/language-tamil-aha-1.png";
import teluguLetter from "../../../public/Assets/icons/LanguagePage/lang-telugu-letter.svg";
import tamilLetter from "../../../public/Assets/icons/LanguagePage/lang-tamil-letter.svg";
import malayalamLetter from "../../../public/Assets/icons/LanguagePage/lang-malayalam-letter.svg";
import ContentLanguageSelector from "@/components/molecules/ContentLanguageSelector";
import DisplayLanguageSelector from "@/components/molecules/DisplayLanguageSelector";
import { setLanguage, setDisplayLanguage } from "@/store/slices/languageSlice";
import { useRouter } from "next/navigation";
import { fetchLanding } from "@/store/slices/landingSlice";
import { AppDispatch } from "@/store/store";
import { getLanguageCode } from "../../utils/GetLanguageCode";
import AppBackground from "@/components/atoms/AppBackgroud";

const nativeLabels: Record<string, string> = {
  Telugu: "తెలుగు",
  Tamil: "தமிழ்",
  Malayalam: "മലയാളം",
};

const LanguagePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem("selectedLanguage") || "Telugu";
  });
  //console.log(selectedLanguage, "selectedLanguage");
  const [localDisplayLang, setLocalDisplayLang] = useState(() => {
    return localStorage.getItem("displayLanguage") || "English";
  });
  const displayLanguageOptions = ["English", selectedLanguage]; // Order matters
  console.log(localDisplayLang, "localDisplayLang");
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
    if (
      localDisplayLang === "Tamil" ||
      localDisplayLang === "Telugu" ||
      localDisplayLang === "Malayalam"
    ) {
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
    <AppBackground>
      <div className="language-container">
        <div className="language-close-parent">
          <Image
            src={closeIcon}
            alt={""}
            className="language-close"
            onClick={() => router.push("/")}
          ></Image>
        </div>
        <div className="language-selection-card">
          {/* Left section */}
          <div className="language-left-section">
            <h3 className="language-left-section-heading">
              Watch <span className="language-highlight">100%</span> content in
            </h3>
            <ContentLanguageSelector
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={() => setSelectedLanguage("Telugu")}
              actorImgSrc={teluguHero}
              language={"Telugu"}
              nativeLabel={"ఆహా"}
              nativelangAhaImg={teluguNativeLang}
              nativelangLetterImg={teluguLetter}
              languageDescription={"మీరు ఈ భాషలోని మొత్తం కంటెంట్‌ను చూస్తారు"}
            />
            <ContentLanguageSelector
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={() => setSelectedLanguage("Tamil")}
              actorImgSrc={tamilHero}
              language={"Tamil"}
              nativeLabel={""}
              nativelangAhaImg={tamilNativeLang}
              nativelangLetterImg={tamilLetter}
              languageDescription={
                "இந்த மொழியில் எல்லா உள்ளடக்கத்தையும் காண்பீர்கள்"
              }
            />
            <ContentLanguageSelector
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={() => setSelectedLanguage("Malayalam")}
              actorImgSrc={malayalamHero}
              language={"Malayalam"}
              nativeLabel={""}
              nativelangAhaImg={tamilNativeLang}
              nativelangLetterImg={malayalamLetter}
              languageDescription={"ഈ ഭാഷയിലെ എല്ലാ ഉള്ളടക്കവും നിങ്ങൾ കാണും"}
            />
          </div>

          {/* Right section */}
          <div className="language-right-section">
            <h3 className="language-right-section-heading">
              Choose Display Language
            </h3>
            <DisplayLanguageSelector
              currentDisplayLanguage={localDisplayLang}
              options={displayLanguageOptions}
              labels={{
                English: "English",
                [selectedLanguage]:
                  nativeLabels[selectedLanguage] || selectedLanguage,
              }}
              onChange={handleDisplayLanguageChange}
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
    </AppBackground>
  );
};

export default LanguagePage;
