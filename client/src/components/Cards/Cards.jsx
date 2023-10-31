import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPokemons } from '../../redux/actions/pokemonActions';
import Card from '../Card/Card';
import styles from './Cards.module.css';

const Cards = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemonReducer.pokemons);
  const searchResults = useSelector((state) => state.pokemonReducer.searchResults);

  useEffect(() => {
    if (!pokemons.length) {
      dispatch(getAllPokemons());
    }
  }, [dispatch, pokemons]);

  const displayPokemons = searchResults.length ? searchResults : pokemons;

  return (
    <div className={styles.cardsContainer}>
      {displayPokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Cards;
