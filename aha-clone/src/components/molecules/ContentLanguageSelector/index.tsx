import React from "react";
import Image, { StaticImageData } from "next/image";
import "./styles.scss";
interface IContentLanguageProps {
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  actorImgSrc: StaticImageData;
  language: "Telugu" | "Tamil";
  nativeLabel: string;
}
const ContentLanguageSelector = (props: IContentLanguageProps) => {
  const {
    selectedLanguage,
    setSelectedLanguage,
    actorImgSrc,
    language,
    nativeLabel,
  } = props;
  return (
    <div
      className={`language-language-card cursor-pointer ${
        props.selectedLanguage === language ? "language-active" : ""
      }`}
      onClick={() => setSelectedLanguage(language)}
      style={{ cursor: "pointer" }}
    >
      <div className="language-language-info">
        <div
          className={`language-check-circle ${
            props.selectedLanguage === language ? "icon-active" : ""
          }`}
        ></div>
        <span className="language-native-language">{nativeLabel}</span>
        <span className="language-language-name">{language}</span>
      </div>
      <div style={{ height: "100%" }}>
        <Image
          src={props.actorImgSrc}
          alt={`${language} Actor`}
          className="language-actor-image"
        />
      </div>
    </div>
  );
};

export default ContentLanguageSelector;
