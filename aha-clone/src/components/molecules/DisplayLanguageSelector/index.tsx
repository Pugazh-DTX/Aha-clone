import React from "react";
import "./styles.scss";

interface IDisplayLanguageSelector {
  currentDisplayLanguage: string;
  options: string[];
  labels: Record<string, string>;
  onChange: (lang: string) => void;
}

const DisplayLanguageSelector = ({
  currentDisplayLanguage,
  options,
  labels,
  onChange,
}: IDisplayLanguageSelector) => {
  return (
    <div>
      <div className="language-language-toggle">
        {options.map((lang) => (
          <button
            key={lang}
            className={`language-toggle-btn ${
              currentDisplayLanguage === lang ? "language-active" : ""
            }`}
            onClick={() => onChange(lang)}
          >
            {labels[lang] || lang}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DisplayLanguageSelector;
