import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchLandingScreen } from "@/services/api/landing.api";
import { ILandingData } from "@/types/landing.types";
import { RootState } from "../store";

interface LandingState {
  landingData: ILandingData | null;
  loading: boolean;
  error: string | null;
  pageNumber: number;
  pageSize: number;
  pageChanged: boolean;
}

const initialState: LandingState = {
  landingData: null,
  loading: false,
  error: null,
  pageNumber: 1,
  pageSize: 5,
  pageChanged: false,
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
    const { landing } = getState() as RootState;

    try {
      const { pageNumber, pageSize } = landing;
      const data = await fetchLandingScreen(pageNumber, pageSize);

      // console.log('Landing Screen Data:', data); // Assuming it returns data in expected format
      return data;
    } catch (err: any) {
      console.error("Error fetching landing screen:");
      // If an error occurs, reject with the error message
      return thunkAPI.rejectWithValue(err.message || "Unknown error occurred");
    }
  },
  {
    condition: (_, { getState }) => {
      const { landing } = getState() as RootState;
      // Prevent refetching if landing data already exists
      return !landing.landingData || landing.pageChanged;
    },
  }
);

// Create the slice to manage landing state
const landingSlice = createSlice({
  name: "landing",
  initialState,
  reducers: {
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
      state.pageChanged = true; // Set pageChanged to true when page number is updated
    },
    appendLandingData: (state, action: PayloadAction<ILandingData>) => {
      if (state.landingData) {
        state.landingData.data = [
          ...state.landingData.data,
          ...action.payload.data,
        ];
      } else {
        state.landingData = action.payload; // If no data exists, just store the first page
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLanding.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLanding.fulfilled, (state, action) => {
        state.loading = false;
        state.pageChanged = false;
        state.landingData = action.payload; // This will reset on first load
        // We can append data later
      })
      .addCase(fetchLanding.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.pageChanged = false;
      });
  },
});

export const { setPageNumber, appendLandingData } = landingSlice.actions;
export default landingSlice.reducer;
