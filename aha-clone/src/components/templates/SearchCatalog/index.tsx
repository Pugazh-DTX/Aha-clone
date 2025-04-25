import SearchPage from "@/modules/Search";
import { fetchSearchScreen } from "@/services/api/search.api";

import React, { useEffect } from "react";

const SearchCatalog = () => {
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchSearchScreen(1, 20);
        console.log(data, "--");
      } catch (error) {
        console.error("Failed to fetch content:", error);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <SearchPage />
    </div>
  );
};

export default SearchCatalog;
