import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons } from '../../redux/actions/pokemonActions';
import styles from './HomePage.module.css';
import Navbar from '../../components/Navbar/Navbar'; // Importa el componente Navbar
import SearchBar from '../../components/SearchBar/SearchBar'; // Importa el componente SearchBar
import Cards from '../../components/Cards/Cards'; // Importa el componente Cards

const HomePage = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Navbar /> {/* Utiliza el componente Navbar */}
      <SearchBar /> {/* Utiliza el componente SearchBar */}
      <h1 className={styles.title}>Pokédex</h1>
      <Cards pokemons={pokemons} /> {/* Utiliza el componente Cards y pasa los pokemons como prop */}
    </div>
  );
};

export default HomePage;
