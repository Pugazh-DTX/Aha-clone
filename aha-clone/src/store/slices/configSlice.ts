import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchConfigAPI } from '@/services/api/config.api';
import { ConfigDataType } from '@/types/config.types';
import { RootState } from '../store';

interface ConfigState {
  configData: ConfigDataType | null;
  loading: boolean;
  error: string | null;
}

const initialState: ConfigState = {
  configData: null,
  loading: false,
  error: null,
};

export const fetchConfig = createAsyncThunk(
  'config/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await fetchConfigAPI();
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { config } = getState() as RootState;
      // Prevent fetch if data already exists
      return !config.configData;
    },
  }
);

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchConfig.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.configData = action.payload;
      })
      .addCase(fetchConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default configSlice.reducer;
