import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLandingScreen } from '@/services/api/landing.api';
import { ILandingData } from '@/types/landing.types';
import { RootState } from '../store';

interface LandingState {
  landingData: ILandingData | null;
  loading: boolean;
  error: string | null;
}

const initialState: LandingState = {
  landingData: null,
  loading: false,
  error: null,
};

// Define the asynchronous thunk action
export const fetchLanding = createAsyncThunk<ILandingData, void, { rejectValue: string }>(
  'landing/fetch',
  async (_, thunkAPI) => {

    try {
      const data = await fetchLandingScreen(); 
      console.log('Landing Screen Data:', data); // Assuming it returns data in expected format
      return data;
    } catch (err: any) {
      console.error('Error fetching landing screen:');
      // If an error occurs, reject with the error message
      return thunkAPI.rejectWithValue(err.message || 'Unknown error occurred');
    }
  },
  {
    condition: (_, { getState }) => {
      const { landing } = getState() as RootState;
      // Prevent refetching if landing data already exists
      return !landing.landingData;
    },
  }
);

// Create the slice to manage landing state
const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {}, // No custom reducers required in this case
  extraReducers: builder => {
    builder
      .addCase(fetchLanding.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLanding.fulfilled, (state, action) => {
        state.loading = false;
        state.landingData = action.payload;
      })
      .addCase(fetchLanding.rejected, (state, action) => {
        state.loading = false;
        // Set the error message from the rejected action payload
        state.error = action.payload as string;
      });
  },
});

export default landingSlice.reducer;
