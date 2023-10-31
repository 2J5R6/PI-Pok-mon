import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonByNameOrId } from '../redux/actions';
import './SearchBar.module.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      dispatch(getPokemonByNameOrId(searchTerm));
    }
  };

  return (
    <div className="searchBarContainer">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Pokémon by name or ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="searchInput"
        />
        <button type="submit" className="searchButton">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
