import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons } from '../../redux/actions/pokemonActions';
import styles from './HomePage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Cards from '../../components/Cards/Cards';

const HomePage = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Navbar />
      <SearchBar />
      <h1 className={styles.title}>Pokédex</h1>
      <Cards pokemons={pokemons} />
    </div>
  );
};

export default HomePage;
