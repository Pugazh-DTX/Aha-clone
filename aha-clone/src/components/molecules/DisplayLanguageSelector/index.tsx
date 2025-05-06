import { Button } from "@/components/atoms";
import React from "react";
import "./styles.scss";
interface IDisplayLanguageSelector {
  selectedLanguage: string;
  displayLanguage: string;
  setDisplayLang: (lang: string) => void;
}
const DisplayLanguageSelector = (props: IDisplayLanguageSelector) => {
  return (
    <div>
      <div className="language-language-toggle">
        <button
          className={`language-toggle-btn ${
            props.displayLanguage === "English" ? "language-active" : ""
          }`}
          onClick={() => props.setDisplayLang("English")}
        >
          English
        </button>
        <button
          className={`language-toggle-btn ${
            props.displayLanguage === props.selectedLanguage ? "language-active" : ""
          }`}
          onClick={() => props.setDisplayLang(props.selectedLanguage)}
        >
          {props.selectedLanguage === "Telugu" ? "తెలుగు" : "தமிழ்"}
        </button>
      </div>
    </div>
  );
};

export default DisplayLanguageSelector;
