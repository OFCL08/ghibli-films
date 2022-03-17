import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Loading } from '../../common/Loading';
import { Header } from "../header/Header";
import './HomeScreen.css';

const HomeScreen = () => {
  const navigate = useNavigate();
  const store = useSelector((state) => state.home);
  const { filmData, filteredFilms } = store;

  function renderFilms() {
    if (!filmData.length) {
      return <div className="Flex Loading-container"><Loading /></div>;
    }

    return (
      <div className="Flex Film-container">
        {filteredFilms.map((film) => (
          <button className="Flex Film-poster-button" key={film.id} onClick={() => navigate(`/details/${film.id}`)}>
            <img alt="Poster" className="Film-poster" key={film.id} src={film.image} />
          </button>
        ))}
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
