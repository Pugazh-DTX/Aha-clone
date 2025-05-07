

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchLandingScreen } from "@/services/api/landing.api";
import { ILandingData, ILandingTab, ILandingModule } from "@/types/landing.types";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { getLocalizedText } from "@/utils/localizationHelpers";

interface LandingState {
  landingData: ILandingData | null;
  loading: boolean;
  error: string | null;
  pageNumber: number;
  pageSize: number;
  hasMore: boolean;
  pageChanged: boolean;
  tabs: ILandingTab[];
  activeTabId: string | null;
  storeFrontId: string | null;
  modules: ILandingModule[];
}

const initialState: LandingState = {
  landingData: null,
  loading: false,
  error: null,
  pageNumber: 1,
  pageSize: 5,
  hasMore: true,
  pageChanged: false,
  tabs: [],
  activeTabId: null,
  storeFrontId: null,
  modules: [],
};

// Define the asynchronous thunk action
export const fetchLanding = createAsyncThunk<
  ILandingData,
  void,
  { rejectValue: string }
>(
  "landing/fetch",
  async (_, thunkAPI) => {
    const { getState } = thunkAPI;
    const { landing, language } = getState() as RootState;
    const acl = language.acl;
    // console.log(language.acl, "acll");

    try {
      const { pageNumber, pageSize } = landing;
      const data = await fetchLandingScreen(pageNumber, pageSize, acl);

      // Return the fetched data
      return data;
    } catch (err: any) {
      console.error("Error fetching landing screen:");
      return thunkAPI.rejectWithValue(err.message || "Unknown error occurred");
    }
  },
  {
    condition: (_, { getState }) => {
      const { landing } = getState() as RootState;
      return !landing.landingData || landing.pageChanged;
    },
  }
);

// Create the slice to manage landing state
// export const fetchLanding = createAsyncThunk<
//   ILandingData,
//   void,
//   { rejectValue: string }
// >("landing/fetch", async (_, thunkAPI) => {
//   const { pageNumber, pageSize } = (thunkAPI.getState() as RootState).landing;
//   try {
//     const data = await fetchLandingScreen(pageNumber, pageSize);
//     return data;
//   } catch (err: any) {
//     return thunkAPI.rejectWithValue(err.message || "Failed to fetch landing");
//   }
// });

const landingSlice = createSlice({
  name: "landing",
  initialState,
  reducers: {
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
      state.pageChanged = true;
    },
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },
    setStoreFrontId: (state, action: PayloadAction<string>) => {
      state.storeFrontId = action.payload;
    },
    setActiveTabId: (state, action: PayloadAction<string>) => {
      state.activeTabId = action.payload;
    },
    appendLandingData: (state, action: PayloadAction<ILandingData>) => {
      if (state.landingData) {
        state.landingData.data = [...state.landingData.data, ...action.payload.data];
      } else {
        state.landingData = action.payload;
      }
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchLanding.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchLanding.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.pageChanged = false;

  //       state.landingData = action.payload;

  //       let currentTabs:any[] = action.payload.data.t || [];
  //       let formatedTabs = currentTabs.length > 0 ? currentTabs.map((t) => {return {id: t.id , name : getLocalizedText(t.lon)["en"]}}) : [];
  //       state.tabs = formatedTabs;
  //       state.storeFrontId = action.payload.data?.id || null;

  //       // const storefront = (action.payload.data as any)?.ty === "Storefront" ? action.payload.data : null;
  //       // state.storeFrontId = storefront?.id ?? null;

  //       // const firstTab = action.payload.tabs?.[0];
  //       // state.activeTabId = firstTab?.tab_id ?? null;

  //       state.modules = action.payload.modules || [];
  //       state.hasMore = Array.isArray(action.payload?.data)
  //         ? action.payload.data.length >= state.pageSize
  //         : false;
  //     })
  //     .addCase(fetchLanding.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload ?? "Unknown error";
  //       state.pageChanged = false;
  //     });
  // },
});

export const {
  setPageNumber,
  setHasMore,
  appendLandingData,
  setActiveTabId,
  setStoreFrontId,
} = landingSlice.actions;

export default landingSlice.reducer;
