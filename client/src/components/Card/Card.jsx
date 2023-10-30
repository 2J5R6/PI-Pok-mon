import React from 'react';
import styles from './Card.module.css';

const Card = ({ pokemon }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={pokemon.image} alt={pokemon.name} className={styles.pokemonImage} />
      <h2 className={styles.pokemonName}>{pokemon.name}</h2>
      <div className={styles.pokemonTypes}>
        {pokemon.types.map((type, index) => (
          <span key={index} className={styles.type}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
