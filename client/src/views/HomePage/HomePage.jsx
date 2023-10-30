import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../redux/actions/pokemonActions';
import styles from './HomePage.module.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pokédex</h1>
      <div className={styles.pokemonList}>
        {pokemons.map(pokemon => (
          <div key={pokemon.id} className={styles.pokemonCard}>
            <img src={pokemon.image} alt={pokemon.name} className={styles.pokemonImage} />
            <h2 className={styles.pokemonName}>{pokemon.name}</h2>
            <p className={styles.pokemonType}>{pokemon.type.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
