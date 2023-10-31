import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import styles from './Cards.module.css';
import { setCurrentPage } from '../../redux/actions/pokemonActions';

const Cards = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);
  const searchedPokemon = useSelector(state => state.searchedPokemon);
  const currentPage = useSelector(state => state.currentPage);
  const totalPages = useSelector(state => state.totalPages);

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const displayPokemons = (searchedPokemon && searchedPokemon.length) ? searchedPokemon : pokemons;

if (!displayPokemons || !displayPokemons.length) {
  return <p className={styles.errorMessage}>No se encontraron pokemons. Por favor, intenta nuevamente.</p>;
}


  return (
    <div className={styles.cardsContainer}>
      {displayPokemons.map(pokemon => (
        <MemoizedCard key={pokemon.id} pokemon={pokemon} />
      ))}
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const MemoizedCard = React.memo(Card);

export default Cards;

