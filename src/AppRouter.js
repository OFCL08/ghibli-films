import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { DetailsScreen } from './components/details/DetailsScreen';
import { useGetAllFilmsQuery } from './components/home/api/HomeApi';
import { HomeScreen } from './components/home/HomeScreen';
import { loadFilms } from './components/home/HomeSlice';

const AppRouter = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllFilmsQuery();
  const store = useSelector((state) => state.home);
  const { filmData } = store;

  useEffect(() => {
    if (!isLoading && data.length && !filmData.length) {
      dispatch(loadFilms(data));
    }
  }, [data, dispatch, filmData, isLoading]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/details/:id" element={<DetailsScreen />} />
        <Route path="*" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
