import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { HomeApi } from './components/home/api/HomeApi';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(HomeApi.middleware),
  reducer: {
    [HomeApi.reducerPath]: HomeApi.reducer,
  },
});

setupListeners(store.dispatch);
