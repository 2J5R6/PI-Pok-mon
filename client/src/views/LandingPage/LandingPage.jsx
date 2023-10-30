import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LandingPage.module.css';
import pokemonImage from '../../assets/images/Pokémon-Gotta.png'

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido al Mundo Pokémon</h1>
      <img src={pokemonImage} alt="Imagen representativa de PokémonWeb" className={styles.image} />
      <button className={styles.exploreButton} onClick={() => navigate('/home')}>Explorar Pokémons</button>
    </div>
  );
}

export default LandingPage;
