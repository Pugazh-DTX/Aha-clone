import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  acl: string;
  displayLanguage: string;
}

const initialState: LanguageState = {
  acl: "te", // default language
  displayLanguage: "en", // default display language
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.acl = action.payload;
    },
    setDisplayLanguage(state, action: PayloadAction<string>) {
      state.displayLanguage = action.payload;
    },
  },
});

export const { setLanguage, setDisplayLanguage } = languageSlice.actions;
export default languageSlice.reducer;
