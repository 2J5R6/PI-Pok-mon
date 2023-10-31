import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './Cards.module.css';

const Cards = () => {
  const pokemons = useSelector(state => state.pokemons);

  if (!pokemons.length) {
    return <p className={styles.errorMessage}>No se encontraron pokemons. Por favor, intenta nuevamente.</p>;
  }

  return (
    <div className={styles.cardsContainer}>
      {pokemons.map(pokemon => (
        <MemoizedCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

const MemoizedCard = React.memo(Card);

export default Cards;
