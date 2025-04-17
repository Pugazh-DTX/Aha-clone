"use client";

import "./styles.scss";
import Link from "next/link";
import { useState } from "react";

interface SeasonDropdownProps {
  seasons: string[];
}

export const SeasonDropdown = ({ seasons }: SeasonDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSeasonSelect = (season: string) => {
    setSelectedSeason(season);
    setIsOpen(false);
  };

  return (
    <div className="season-dropdown-main">
      <div
        className="season-dropdown-box cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedSeason}
        <svg
          width="15"
          height="9"
          viewBox="0 0 15 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`chevron-down-icon ${isOpen ? "rotate-180" : ""}`}
          aria-label="Season chevron down"
        >
          <path
            d="M2.10041 0.899587C1.7343 0.53347 1.1407 0.53347 0.774587 0.899587C0.408471 1.2657 0.408471 1.85929 0.774587 2.22541L7.02459 8.47541C7.3907 8.84153 7.98429 8.84153 8.35041 8.47541L14.6004 2.22541C14.9665 1.85929 14.9665 1.2657 14.6004 0.899587C14.2343 0.53347 13.6407 0.53347 13.2746 0.899587L7.6875 6.48667L2.10041 0.899587Z"
            fill="#ECECEC"
          />
        </svg>
      </div>
      <ul
        className={`season-dropdown-opction-main ${
          isOpen ? "open-list" : "closed-list"
        }`}
      >
        {seasons.map((season) => (
          <li key={season} className="season-li">
            <Link
              href={"#"}
              className="season-li-link"
              onClick={() => handleSeasonSelect(season)}
            >
              {season}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
