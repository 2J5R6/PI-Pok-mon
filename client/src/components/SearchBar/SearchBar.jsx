import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchPokemon } from '../../redux/actions/pokemonActions';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    dispatch(searchPokemon(searchTerm));
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        placeholder="Buscar Pokemon..."
        value={searchTerm}
        onChange={handleInputChange}
        className={styles.searchInput}
      />
      <button onClick={handleSearch} className={styles.searchButton}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
