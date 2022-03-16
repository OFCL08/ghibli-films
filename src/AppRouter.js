import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { HomeScreen } from './components/home/HomeScreen';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
