import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import searchIcon from '../../assets/search.png';
import cancelIcon from '../../assets/close.png';
import { SearchInput } from './SearchInput';
import { SearchList } from './SearchList';
import './Header.css';
import { loadFilteredFilms } from '../home/HomeSlice';

const Header = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.home);
  const { filmData } = store;

  const [headerStyle, setHeaderStyle] = useState('Header-container');
  const [showInput, setShowInput] = useState(false);
  const [showList, setShowList] = useState(false);
  const [inputText, setInputText] = useState('');
  const [originalResult, setOriginalResult] = useState(filmData);
  const [searchResult, setSearchResult] = useState(filmData);
  const inputRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 0) {
      setHeaderStyle('Header-container-block');
    } else {
      setHeaderStyle('Header-container');
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (filmData.length) {
      setOriginalResult(filmData);
      dispatch(loadFilteredFilms(filmData));
    }
  }, [dispatch, filmData]);

  function handleOnBlurInput() {
    setShowList(false);
  }

  useEffect(() => {
    if (!showInput) {
      handleOnBlurInput();
      setInputText('');
    }
  }, [showInput]);

  function handleOnClickSearch() {
    setShowInput((prevState) => !prevState);
  }

  function filterFilms(title) {
    const parameter = title.toLowerCase();
    const results = originalResult.filter((item) => item.title.toLowerCase().includes(parameter));
    setSearchResult(results);
    dispatch(loadFilteredFilms(results));
  }

  function handleOnChangeText(event) {
    setShowList(true);
    setInputText(event.target.value);
    filterFilms(event.target.value);
  }

  function handleOnClickResult(title) {
    setInputText(title);
    filterFilms(title);
    handleOnBlurInput();
  }

  return (
    <header className={`Flex-row ${headerStyle}`}>
      <div className="Flex-row Search-container">
        <button className="Search-button">
          <img alt="search" className="Search-icon" src={showInput ? cancelIcon : searchIcon} onClick={handleOnClickSearch} />
        </button>

        <SearchInput
          handleOnChangeText={handleOnChangeText}
          inputRef={inputRef}
          inputText={inputText}
          showInput={showInput}
        />

        <SearchList
          handleOnClickResult={handleOnClickResult}
          searchResult={searchResult}
          showList={showList}
        />
      </div>

      <span className="Header-container-title">STUDIO GHIBLI</span>
    </header>
  );
}

export { Header };
