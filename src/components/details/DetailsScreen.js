import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header } from '../header/Header';
import { Loading } from '../../common/Loading';
import playIcon from '../../assets/play.png';
import './DetailsScreen.css';

const DetailsScreen = () => {
  const params = useParams();
  const store = useSelector((state) => state.home);
  const { filmData } = store;
  const film = filmData.find((item) => item.id === params.id);

  function renderFilm() {
    const {
      description,
      director,
      movie_banner,
      original_title,
      producer,
      title,
    } = film;

    return (
      <div className='Flex-column Detail-screen'>
        <div className='Details-header'><Header /></div>

        <div className='Flex-column'>
          <img alt='movie banner' className='Movie-banner' src={movie_banner} />

          <div className='Flex-column Details-container'>
            <span className='Details-title'>{title} / {original_title}</span>

            <span className='Details-description'>{description}</span>

            <img alt='play button' className='Play-button' src={playIcon} />

            <div className='Flex-column Details-info'>
              <h2>Producer</h2>
              <span>{producer}</span>

              <h2>Director</h2>
              <span>{director}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return film ? renderFilm() : <div className='Flex Loading-details'><Loading /></div>;
};

export { DetailsScreen };
