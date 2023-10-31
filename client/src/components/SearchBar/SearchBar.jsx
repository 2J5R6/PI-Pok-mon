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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      dispatch(searchPokemon(searchTerm));
    }
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Buscar Pokemon..."
          value={searchTerm}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
