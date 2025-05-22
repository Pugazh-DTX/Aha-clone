"use client";
import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import dropdownArrow from "../../../../public/Assets/icons/Login/drop-down-arrow.svg";
import afganFlag from "../../../../public/Assets/icons/Login/afgan-flag.svg";
import nzFlag from "../../../../public/Assets/icons/Login/nz-flag.svg";
import albaniaFlag from "../../../../public/Assets/icons/Login/albania-flag.svg";
import usaFlag from "../../../../public/Assets/icons/Login/usa-flag.svg";
import flag from "../../../../public/Assets/icons/Flag_of_India.svg";
import popupClose from "../../../../public/Assets/icons/Login/popup-close.svg";
import "./styles.scss";
import Portal from "../../../components/atoms/Portal";
import InputBox from "@/components/atoms/Inputbox";

const countryCodes = [
  { code: "+93", name: "Afghanistan (AF)", flag: afganFlag },
  { code: "+355", name: "Albania (AL)", flag: albaniaFlag },
  { code: "+91", name: "India (IN)", flag: flag },
  { code: "+64", name: "New Zealand (NZ)", flag: nzFlag },
  { code: "+1", name: "United States (US)", flag: usaFlag },
];

interface Country {
  code: string;
  name: string;
  flag: StaticImageData;
}

interface Props {
  value: Country;
  onChange: (country: Country) => void;
}

const CountryCodeDropdown: React.FC<Props> = ({ value, onChange }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countryCodes.filter((item) =>
    `${item.code} ${item.name}`.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredCountries, "filteredCountries");

  return (
    <>
      {/* Trigger Button */}
      <div
        className="country-dropdown__toggle login-flex-jc-ac cursor-pointer"
        onClick={() => setShowPopup(true)}
      >
        <Image
          src={value.flag}
          alt={value.name}
          width={26}
          height={18}
          className="border"
        />
        <span className="country-dropdown__code" style={{ marginLeft: "6px" }}>
          {value.code}
        </span>
        <Image src={dropdownArrow} alt="Arrow" />
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <Portal>
          <div className="country-popup-overlay">
            <div className="country-popup__close">
              <Image
                src={popupClose}
                alt={"Close"}
                width={32}
                height={32}
                className="cursor-pointer"
                onClick={() => {
                  setShowPopup(false);
                }}
              />
            </div>
            <div className="country-popup" ref={popupRef}>
              <h4 className="country-popup__title">Select a country</h4>
              {/* InputBox for search */}
              <InputBox
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                inputElementClass="country-popup__email-input"
                autoFocus
              />

              <div className="country-popup__list scrollable-container">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((item) => (
                    <div
                      key={item.code}
                      className="country-popup__item"
                      onClick={() => {
                        onChange(item);
                        setShowPopup(false);
                      }}
                    >
                      <div className="login-flex-jc-ac">
                        <Image
                          src={item.flag}
                          alt={item.name}
                          width={28}
                          height={18}
                          style={{ marginRight: "8px", borderRadius: "4px" }}
                        />
                        <span>{item.name}</span>
                      </div>
                      <div style={{ marginRight: "4px" }}>{item.code}</div>
                    </div>
                  ))
                ) : (
                  <p>No Matching Countries</p>
                )}
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default CountryCodeDropdown;
