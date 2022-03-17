import React from 'react';
import './Header.css';

const SearchList = ({
  handleOnClickResult = () => {},
  searchResult = [],
  showList = false,
}) => {
  if (showList) {
    return (
      <div className="Flex-column Search-result">
        {searchResult.slice(0, 5).map((item) => {
          return (
            <button className="Search-item" key={item.id} onClick={() => handleOnClickResult(item.title)}>
              {item.title}
            </button>
          );
        })}
      </div>
    );
  }

  return null;
};

export { SearchList };
