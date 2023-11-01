import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFavorite } from '../../redux/actions/pokemonActions'; // Asumiendo que tienes una acción llamada toggleFavorite en pokemonActions
import styles from './Card.module.css';

const Card = ({ pokemon }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.pokemons.favorites); // Asumiendo que tienes un estado llamado favorites en el reducer de pokemon

  const isFavorite = favorites.includes(pokemon.id);

  const handleFavorite = () => {
    dispatch(toggleFavorite(pokemon.id));
  };

  return (
    <div className={styles.cardContainer}>
      <img src={pokemon.image} alt={pokemon.name} className={styles.pokemonImage} />
      <div className={styles.pokemonInfo}>
        <h2>{pokemon.name}</h2>
        <div>
        {pokemon.types.map(type => (
          <div key={type.id}>
              {type.name}
          </div>
        ))}
        </div>
        <button onClick={handleFavorite}>
          {isFavorite ? '❤️' : '🤍'}
        </button>
        <Link to={`/pokemon/${pokemon.id}`} className={styles.detailsLink}>
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Card;
