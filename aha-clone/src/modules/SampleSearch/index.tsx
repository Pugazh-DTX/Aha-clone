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

const SearchScreen = () => {
  const [rArr, setRArr] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || ""; // fallback to empty string
  console.log(query, "query");
  const { data, loading, error, isSearching, source } = useSelector(
    (state: any) => state.search
  );

  useEffect(() => {
    // Initial default load
    if (query?.trim().length <= 2) {
      dispatch(fetchInitialSearchScreen());
    }
  }, [query, dispatch]);

  useEffect(() => {
    if (query.trim().length > 2) {
      dispatch(fetchSearchResults(query));
    }
  }, [query, dispatch]);

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
