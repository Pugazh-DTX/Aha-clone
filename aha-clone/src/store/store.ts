import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./slices/configSlice";
import landingReducer from "./slices/landingSlice";

import layoutReducer from "./slices/layoutSlice";
import searchReducer from "./slices/searchSlice";
import languageSlice from "./slices/languageSlice";
export const store = configureStore({
  reducer: {
    config: configReducer,
    landing: landingReducer,
    layout: layoutReducer,
    search: searchReducer,
    language: languageSlice,
  },
});

// ✅ Type exports
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
