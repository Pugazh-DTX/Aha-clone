"use client";

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";

import {
  fetchInitialSearchScreen,
  fetchSearchResults,
} from "../../store/slices/searchSlice";
import { useAppDispatch } from "@/store/hooks";
import { ResourceAdapter } from "@/adapters/ahaAdapter";
import SearchCat from "@/components/templates/searchcat";
import { getLanguageCode } from "@/utils/GetLanguageCode";

const SearchScreen = () => {
  const [rArr, setRArr] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || ""; // fallback to empty string
  console.log(query, "query");
  const { data, loading, error, isSearching, source } = useSelector(
    (state: any) => state.search
  );

  const selectedLang =
    (typeof window !== "undefined" &&
      localStorage.getItem("selectedLanguage")) ||
    "Telugu";
  const acl = getLanguageCode(selectedLang);

  useEffect(() => {
    // Initial default load
    if (query?.trim().length <= 2) {
      dispatch(fetchInitialSearchScreen(acl));
    }
  }, [query, dispatch]);

  useEffect(() => {
    if (query.trim().length > 2) {
      dispatch(fetchSearchResults({ acl, query }));
    }
  }, [query, dispatch]);

  const displayLang =
    (typeof window !== "undefined" &&
      localStorage.getItem("displayLanguage")) ||
    "English";
  const displayLanguage = getLanguageCode(displayLang);

  //console.log(data.data);
  const rawItems = Array.isArray(data) ? data : data?.data ?? [];
  const adapterValue = ResourceAdapter(rawItems, "te");
  //console.log(adapterValue, "--Adapter Value--");
  console.log(rawItems.length, "search resouce length");

  useEffect(() => {
    if (rawItems.length > 0 && query.length > 2) {
      setRArr((prev) => [query, ...prev]);
      console.log("arrPush", `search resource length ${rawItems.length}`);
    }
  }, [query]);

  useEffect(() => {
    console.log(rArr, "RARR search resource length");
  }, [rArr]);

  return (
    <div>
      <SearchCat
        resource={adapterValue}
        source={source}
        query={query}
        recentSearch={rArr}
      />
    </div>
  );
};

export default SearchScreen;
