import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Loading } from '../../common/Loading';
import { useGetAllFilmsQuery } from './api/HomeApi';
import { loadFilms } from '../home/HomeSlice';
import { Header } from "../header/Header";
import './HomeScreen.css';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllFilmsQuery();
  const store = useSelector((state) => state.home);
  const { filmData, filteredFilms } = store;

  useEffect(() => {
    if (!isLoading && data.length && !filmData.length) {
      dispatch(loadFilms(data));
    }
  }, [data, dispatch, filmData, isLoading]);

  function renderFilms() {
    if (isLoading) {
      return <div className="Flex Loading-container"><Loading /></div>;
    }

    return (
      <div className="Flex Film-container">
        {filteredFilms.map((film) => <img alt="Poster" key={film.id} src={film.image} />)}
      </div>
    );
  }
  return (
    <div className="Flex-column Home-container">
      <Header />

      <span>Films</span>

      {renderFilms()}
    </div>
  );
};

export { HomeScreen };
