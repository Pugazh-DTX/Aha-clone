import React from "react";
import Image, { StaticImageData } from "next/image";
import "./styles.scss";
interface IContentLanguageProps {
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  actorImgSrc: StaticImageData;
  language: "Telugu" | "Tamil" | "Malayalam" | "English";
  nativeLabel: string;
  isUsedDisplayLangCard?: boolean;
  nativeLanguageWord?: string;
  languageDescription: string;
  nativelangAhaImg: StaticImageData | string;
  nativelangLetterImg: StaticImageData | string;
  nativelangAhaImgAfter: StaticImageData | string;
}
const ContentLanguageSelector = (props: IContentLanguageProps) => {
  const {
    selectedLanguage,
    setSelectedLanguage,
    actorImgSrc,
    language,
    nativeLabel,
    isUsedDisplayLangCard,
    nativeLanguageWord,
    languageDescription,
    nativelangAhaImg,
    nativelangLetterImg,
    nativelangAhaImgAfter,
  } = props;

  return (
    <div
      className={`language-language-card cursor-pointer ${
        props.selectedLanguage === language ? "language-active" : ""
      }`}
      onClick={() => setSelectedLanguage(language)}
      style={{ cursor: "pointer" }}
    >
      <div className="language-left-container">
        <div className="language-language-info">
          <div
            className={`language-check-circle ${
              props.selectedLanguage === language ? "icon-active" : ""
            }`}
          ></div>
          {/* <span
          className="language-native-language"
          style={{ backgroundImage: `${nativelangImg}` }}
        ></span> */}
          {nativelangAhaImg && <Image src={nativelangAhaImg} alt={""} />}
          {isUsedDisplayLangCard ? (
            <span className="language-language-name">{nativeLanguageWord}</span>
          ) : (
            <span className="language-language-name">{language}</span>
          )}

          {nativelangAhaImgAfter && (
            <Image
              src={nativelangAhaImgAfter}
              alt={""}
              style={{ opacity: "0.15" }}
            />
          )}
        </div>
        <div>
          <p className="language-content-description">{languageDescription}</p>
        </div>
      </div>
      <div style={{ height: "100%" }}>
        <Image
          src={props.actorImgSrc}
          alt={`${language} Actor`}
          className="language-actor-image"
        />
      </div>
      <div className="language-letter-img">
        <Image src={nativelangLetterImg} alt={""} />
      </div>
    </div>
  );
};

export default ContentLanguageSelector;
