import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './Cards.module.css';

const Cards = () => {
  const pokemons = useSelector(state => state.pokemons);

  return (
    <div className={styles.cardsContainer}>
      {pokemons.map(pokemon => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Cards;
