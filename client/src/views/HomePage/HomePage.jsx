import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../../redux/actions/pokemonActions';
import SearchBar from '../../components/SearchBar/SearchBar';
import Filters from '../../components/Filters/Filters';
import Card from '../../components/Card/Card';
import styles from './HomePage.module.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { pokemons, isLoading, error } = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <div className={styles.homePageContainer}>
      <SearchBar />
      <Filters />
      {isLoading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      <div className={styles.cardsContainer}>
        {pokemons.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
