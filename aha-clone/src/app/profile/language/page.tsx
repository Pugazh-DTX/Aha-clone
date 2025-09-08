import LanguagePage from "@/modules/LanguagePage";
import React, { Suspense } from "react";

const Language = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading language page...</div>}>
        <LanguagePage />
      </Suspense>
    </div>
  );
};

export default Language;
