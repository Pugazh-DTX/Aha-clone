"use client";

import React, { useEffect, useState } from "react";
import LanguageOnboard from "../../../components/organisms/LanguageOnboard";

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const selectedLang = localStorage.getItem("selectedLanguage");
    //console.log(selectedLang, "selclanglayout");
    if (!selectedLang) {
      setShowModal(true);
    }
  }, []);

  return (
    <>
      {showModal && <LanguageOnboard onClose={() => setShowModal(false)} />}
      {children}
    </>
  );
}
