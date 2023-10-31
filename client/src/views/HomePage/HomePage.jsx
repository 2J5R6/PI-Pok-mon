import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import Cards from '../Cards/Cards';
import Filters from '../Filters/Filters';
import styles from './HomePage.module.css';

const HomePage = () => {
  const pokemons = useSelector(state => state.pokemons.data);

  return (
    <div className={styles.homePageContainer}>
      <NavBar />
      <SearchBar />
      <div className={styles.contentArea}>
        <Filters />
        <div className={styles.cardsContainer}>
          {pokemons && pokemons.map(pokemon => (
            <Cards key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
