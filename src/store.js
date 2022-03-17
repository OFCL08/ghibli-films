import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { HomeApi } from './components/home/api/HomeApi';
import homeSlice from './components/home/HomeSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(HomeApi.middleware),
  reducer: {
    home: homeSlice,
    [HomeApi.reducerPath]: HomeApi.reducer,
  },
});

setupListeners(store.dispatch);
