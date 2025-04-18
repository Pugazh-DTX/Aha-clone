'use client';

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { fetchConfig } from '@/store/slices/configSlice';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    store.dispatch(fetchConfig());
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
