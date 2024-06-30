// SearchBar.jsx

import React, {useState} from 'react';
import './SearchBar.css'; // Importing CSS for styling

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value); // Notify parent component of search query
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
