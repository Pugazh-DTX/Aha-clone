// src/store/slices/layoutSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayoutState {
  showHeader: boolean;
  showFooter: boolean;
  onlyShowLogo: boolean;
  showOnlySearchBar: boolean;
}

const initialState: LayoutState = {
  showHeader: true,
  showFooter: true,
  onlyShowLogo: false,
  showOnlySearchBar: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    showHeader: (state) => {
      state.showHeader = true;
    },
    hideHeader: (state) => {
      state.showHeader = false;
    },
    showFooter: (state) => {
      state.showFooter = true;
    },
    hideFooter: (state) => {
      state.showFooter = false;
    },
    setHeaderVisibility: (state, action) => {
      state.showHeader = action.payload;
    },
    setFooterVisibility: (state, action) => {
      state.showFooter = action.payload;
    },

    setOnlyShowLogo: (state, action: PayloadAction<boolean>) => {
      state.onlyShowLogo = action.payload;
    },
    setShowOnlySearchBar: (state, action: PayloadAction<boolean>) => {
      state.showOnlySearchBar = action.payload;
    },
  },
});

export const {
  showHeader,
  hideHeader,
  showFooter,
  hideFooter,
  setHeaderVisibility,
  setFooterVisibility,
  setOnlyShowLogo,
  setShowOnlySearchBar,
} = layoutSlice.actions;

export default layoutSlice.reducer;
