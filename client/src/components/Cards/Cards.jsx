import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';

const Cards = ({ pokemon }) => {
  console.log("Pokemons en Cards:", pokemon);
  if (!pokemon || pokemon.length === 0) {
    return <div className={styles.loading}>Cargando...</div>;
  }

  return (
    <div className={styles.cardsContainer}>
      {pokemon.map(poke => <Card key={poke.id} pokemon={poke} />)}
    </div>
  );
};

export default Cards;
