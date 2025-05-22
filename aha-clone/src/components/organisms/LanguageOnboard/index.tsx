// components/organisms/LanguageOnboard.tsx
"use client";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import Image from "next/image";
import ContentLanguageSelector from "@/components/molecules/ContentLanguageSelector";
import teluguHero from "../../../../public/Assets/images/LanguagePage/lang-telugu-hero-s.png";
import tamilHero from "../../../../public/Assets/images/LanguagePage/lang-tamil-hero-s.png";
import teluguAha from "../../../../public/Assets/icons/LanguagePage/language-telugu-aha.svg";
import tamilAha from "../../../../public/Assets/icons/LanguagePage/language-tamil-aha.svg";
import teluguLetter from "../../../../public/Assets/icons/LanguagePage/lang-telugu-letter.svg";
import tamilLetter from "../../../../public/Assets/icons/LanguagePage/lang-tamil-letter.svg";
import englishAha from "../../../../public/Assets/icons/LanguagePage/language-english-aha.svg";
import englishLetter from "../../../../public/Assets/icons/LanguagePage/lang-english-letter.svg";
import popupClose from "../../../../public/Assets/icons/Login/popup-close.svg";
import { Button } from "@/components/atoms";
import { usePathname, useRouter } from "next/navigation";
const LanguageOnboard = ({ onClose }: { onClose: () => void }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<"Telugu" | "Tamil">(
    "Telugu"
  );
  const [readContentLang, setReadContentLang] = useState<
    "English" | "Telugu" | "Tamil"
  >("English");
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (readContentLang !== "English") {
      setReadContentLang(selectedLanguage);
    }
  }, [selectedLanguage]);
  //console.log(selectedLanguage, "selectedLanguage");
  //console.log(readContentLang, "readContentLanguage");

  const value = localStorage.getItem("selectedLanguage");
  const displayLang = localStorage.getItem("displayLanguage");
  console.log(value, "value", displayLang);
  const handleLangProceed = () => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
    localStorage.setItem("displayLanguage", readContentLang);
    onClose();

    if (pathname === "/") {
      window.location.reload();
    } else {
      router.push("/");
    }
  };
  return (
    <section>
      <div className="language-onboard__overlay">
        <div className="language-onboard__modal">
          {/* Your content goes here */}
          <div style={{ marginBottom: "20px", justifySelf: "end" }}>
            <Image
              src={popupClose}
              alt={"Close"}
              width={32}
              height={32}
              className="cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="language-onboard__section">
            <div className="language-onboard__left-section">
              <h3 className="language-onboard__heading">
                Watch{" "}
                <span className="language-onboard__heading-orange">100%</span>{" "}
                content in
              </h3>
              <ContentLanguageSelector
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={() => setSelectedLanguage("Telugu")}
                actorImgSrc={teluguHero}
                language={"Telugu"}
                nativeLabel={""}
                languageDescription={""}
                nativelangAhaImg={""}
                nativelangLetterImg={teluguLetter}
                nativelangAhaImgAfter={teluguAha}
              />
              <ContentLanguageSelector
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={() => {
                  setSelectedLanguage("Tamil");
                }}
                actorImgSrc={tamilHero}
                language={"Tamil"}
                nativeLabel={""}
                languageDescription={""}
                nativelangAhaImg={""}
                nativelangLetterImg={tamilLetter}
                nativelangAhaImgAfter={tamilAha}
              />
            </div>
            <div className="language-onboard__right-section">
              <h3 className="language-onboard__heading">
                Read{" "}
                <span className="language-onboard__heading-orange">
                  Content
                </span>{" "}
                in English
              </h3>
              <ContentLanguageSelector
                selectedLanguage={readContentLang}
                setSelectedLanguage={() => setReadContentLang("English")}
                actorImgSrc={
                  selectedLanguage === "Telugu" ? teluguHero : tamilHero
                }
                language={"English"}
                nativeLabel={""}
                isUsedDisplayLangCard={true}
                nativeLanguageWord={"English"}
                languageDescription={""}
                nativelangAhaImg={""}
                nativelangLetterImg={englishLetter}
                nativelangAhaImgAfter={englishAha}
              />
              {selectedLanguage === "Telugu" ? (
                <h3
                  className="language-onboard__heading"
                  style={{ paddingTop: "8px" }}
                >
                  తెలుగులో{" "}
                  <span className="language-onboard__heading-orange">
                    కంటెంట్
                  </span>{" "}
                  చదవండి
                </h3>
              ) : (
                <h3
                  className="language-onboard__heading"
                  style={{ paddingTop: "8px" }}
                >
                  தமிழில்{" "}
                  <span className="language-onboard__heading-orange">
                    உள்ளடக்கத்தை
                  </span>{" "}
                  படிக்கவும்
                </h3>
              )}
              <ContentLanguageSelector
                selectedLanguage={readContentLang}
                setSelectedLanguage={() => {
                  setReadContentLang(
                    selectedLanguage === "Telugu" ? "Telugu" : "Tamil"
                  );
                }}
                actorImgSrc={
                  selectedLanguage === "Telugu" ? teluguHero : tamilHero
                }
                language={selectedLanguage === "Telugu" ? "Telugu" : "Tamil"}
                nativeLabel={""}
                isUsedDisplayLangCard={true}
                nativeLanguageWord={
                  selectedLanguage === "Telugu" ? "తెలుగు" : "தமிழ்"
                }
                languageDescription={""}
                nativelangAhaImg={""}
                nativelangLetterImg={
                  selectedLanguage === "Telugu" ? teluguLetter : tamilLetter
                }
                nativelangAhaImgAfter={
                  selectedLanguage === "Telugu" ? teluguAha : tamilAha
                }
              />
              <Button
                children={"Proceed"}
                wrapperClass="language-onboard__proceed"
                onClick={handleLangProceed}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageOnboard;
