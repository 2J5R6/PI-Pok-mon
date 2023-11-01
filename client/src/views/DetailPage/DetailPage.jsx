import React from 'react';
import styles from './DetailPage.module.css';

function DetailPage({ pokemon }) {
  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <img src={pokemon.image} alt={pokemon.name} className={styles.image} />
      <h1 className={styles.name}>{pokemon.name.toUpperCase()}</h1>
      <p><strong>ID:</strong> {pokemon.id}</p>
      <p><strong>Vida:</strong> {pokemon.life}</p>
      <p><strong>Ataque:</strong> {pokemon.attack}</p>
      <p><strong>Defensa:</strong> {pokemon.defense}</p>
      <p><strong>Velocidad:</strong> {pokemon.speed}</p>
      <p><strong>Altura:</strong> {pokemon.height}</p>
      <p><strong>Peso:</strong> {pokemon.weight}</p>
      <p><strong>Tipo:</strong> {pokemon.type}</p>
    </div>
  );
}

export default DetailPage;
