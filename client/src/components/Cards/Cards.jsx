import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../../redux/actions/pokemonActions';
import Card from '../Card/Card';
import styles from './Cards.module.css';

const Cards = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemon.pokemons);
  const isLoading = useSelector(state => state.pokemon.isLoading);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  if (isLoading) {
    return <div className={styles.loading}>Cargando...</div>;
  }

  return (
    <div className={styles.cardsContainer}>
      {pokemons.map(pokemon => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Cards;
