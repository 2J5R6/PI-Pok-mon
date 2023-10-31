import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import styles from './Cards.module.css';
import { setCurrentPage } from '../../redux/actions/pokemonActions';

const Cards = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);
  const currentPage = useSelector(state => state.currentPage);
  const totalPages = useSelector(state => state.totalPages);

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  if (!pokemons.length) {
    return <p className={styles.errorMessage}>No se encontraron pokemons. Por favor, intenta nuevamente.</p>;
  }

  return (
    <div className={styles.cardsContainer}>
      {pokemons.map(pokemon => (
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
