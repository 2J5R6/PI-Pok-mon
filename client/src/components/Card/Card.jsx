import React from 'react';
import styles from './Card.module.css';

const Card = ({ pokemon }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={pokemon.image} alt={"Imagen de " + pokemon.name} className={styles.pokemonImage} />
      <h2 className={styles.pokemonName}>{pokemon.name}</h2>
      <div className={styles.pokemonTypes}>
        {pokemon.types.map((type) => (
          <span key={pokemon.id + type} className={styles.type}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
