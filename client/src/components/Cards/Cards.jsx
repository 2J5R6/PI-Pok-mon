import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../../redux/actions/pokemonActions';
import Card from '../Card/Card';
import styles from './Cards.module.css';

const Cards = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons.data);
  const isLoading = useSelector(state => state.pokemon.isLoading);

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(fetchPokemons());
    }
  }, [dispatch, pokemons.length]);
  
  if (isLoading) {
    return <div className={styles.loading}>Cargando...</div>;
  }

  return (
    <div className={styles.cardsContainer}>
      {pokemons.length > 0 ? (
        pokemons.map(pokemon => <Card key={pokemon.id} pokemon={pokemon} />)
      ) : (
        <p>No se encontraron Pokémon.</p>
      )}
    </div>
  );
};

export default Cards;
