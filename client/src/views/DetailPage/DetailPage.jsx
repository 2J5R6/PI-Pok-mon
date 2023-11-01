import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './DetailPage.module.css';

function DetailPage() {
  const { id } = useParams();
  const pokemon = useSelector(state => state.pokemons.pokemons.find(p => p.id === parseInt(id)));
  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <img src={pokemon.image} alt={pokemon.name} className={styles.image} />
      <h1 className={styles.name}>{pokemon.name.toUpperCase()}</h1>
      <p><strong>ID:</strong> {pokemon.id}</p>
      <p><strong>Vida:</strong> {pokemon.hp}</p>
      <p><strong>Ataque:</strong> {pokemon.attack}</p>
      <p><strong>Defensa:</strong> {pokemon.defense}</p>
      <p><strong>Velocidad:</strong> {pokemon.speed}</p>
      <p><strong>Altura:</strong> {pokemon.height}</p>
      <p><strong>Peso:</strong> {pokemon.weight}</p>
      <p><strong>Tipo:</strong> 
      {pokemon.types && pokemon.types.map(type => (
          <div key={type.id}>
              {type.name.toUpperCase()}
          </div>
        ))}
      </p>
    </div>
  );
}

export default DetailPage;
