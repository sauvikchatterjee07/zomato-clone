import React from "react";
import "./SearchComponent.css";

const SearchComponent = ({ searchInput, setSearchInput, handleSearch }) => {
  const handleChange = (e) => {
    const userInput = e.target.value;
    setSearchInput(userInput);
  };

  const handleSubmit = (e) => {
    handleSearch(searchInput);
  };

  return (
    <div className="search-container">
      <input
        type="search"
        className="search-box"
        placeholder="Search for Restaurants"
        value={searchInput}
        onChange={handleChange}
      />
      <button className="search-btn" type="submit" onClick={handleSubmit}>
        <span>Search</span>
      </button>
    </div>
  );
};

export default SearchComponent;
