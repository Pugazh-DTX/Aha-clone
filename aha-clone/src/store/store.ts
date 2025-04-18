import { configureStore } from '@reduxjs/toolkit';
import configReducer from './slices/configSlice';
import landingReducer from './slices/landingSlice'
export const store = configureStore({
  reducer: {
    config: configReducer,
    landing: landingReducer,

  },
});

// ✅ Type exports
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
