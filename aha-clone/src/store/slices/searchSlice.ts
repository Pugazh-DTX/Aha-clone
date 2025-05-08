import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchInitialSearchScreenAPI,
  fetchSearchResultsAPI,
} from "../../services/api/search.api";

// Thunks
export const fetchInitialSearchScreen = createAsyncThunk(
  "search/fetchInitialSearchScreen",
  async (acl: string) => {
    const data = await fetchInitialSearchScreenAPI(acl);
    console.log("Data in Thunk", data);
    return data;
  }
);

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async ({ acl, query }: { acl: string; query: string }) => {
    return await fetchSearchResultsAPI(acl, query);
  }
);

// State type
interface SearchState {
  data: any[];
  loading: boolean;
  error: string | null;
  isSearching: boolean;
  source: "initial" | "search" | null;
}

const initialState: SearchState = {
  data: [],
  loading: false,
  error: null,
  isSearching: false,
  source: null,
};

// Slice
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialSearchScreen.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isSearching = false;
      })
      .addCase(fetchInitialSearchScreen.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.source = "initial";
      })
      .addCase(fetchInitialSearchScreen.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      })

      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isSearching = true;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.source = "search";
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default searchSlice.reducer;
