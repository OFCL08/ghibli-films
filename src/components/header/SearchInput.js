import React from 'react';
import './Header.css';

const SearchInput = ({
  handleOnChangeText = () => {},
  inputRef = null,
  inputText = '',
  showInput = false,
}) => {
  if (showInput) {
    return (
      <div className="Flex-column">
        <input
          className="Search-input"
          onChange={handleOnChangeText}
          placeholder="What are you looking for?"
          ref={inputRef}
          type="text"
          value={inputText}
        />
      </div>
    );
  }

  return null;
};

export { SearchInput };
