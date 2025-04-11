"use client";

import { useEffect, useState } from "react";
import "./styles.scss";

export const ChatWithExpert = () => {
  const [isAtPageEnd, setIsAtPageEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY + 66;
      const pageHeight = document.documentElement.scrollHeight;
      setIsAtPageEnd(scrollPosition >= pageHeight - 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="chat-with-expert-main"
      style={{
        transform: isAtPageEnd ? "translateY(-78px)" : "translateY(0px)",
      }}
    >
      <button className="chat-button-main">
        <span className="chat-icon" data-icon=""></span>
        <span className="chat-text">Chat with an Expert</span>
      </button>
    </div>
  );
};
