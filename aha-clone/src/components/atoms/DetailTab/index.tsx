"use client";

import { useState, useEffect } from "react";
import "./styles.scss";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface DetailTabProps {
  tabs?: Tab[];
}

export const DetailTab: React.FC<DetailTabProps> = ({ tabs = [] }) => {
  const [selectedTab, setSelectedTab] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (tabs.length > 0 && !selectedTab) {
      setSelectedTab(tabs[0].label);
    }
  }, [tabs, selectedTab]);

  const renderContent = () => {
    const selected = tabs.find((tab) => tab.label === selectedTab);
    return selected?.content || <div>No content available</div>;
  };

  if (tabs.length === 0) {
    return <div>No tabs to show</div>;
  }

  return (
    <div className="detail-tab-main">
      <div className="detail-tab-list-ali">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`tab-menu-text ${
              selectedTab === tab.label
                ? "selected-list-name"
                : "non-selected-list-name"
            }`}
            onClick={() => setSelectedTab(tab.label)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="detail-tab-content">{renderContent()}</div>
    </div>
  );
};
