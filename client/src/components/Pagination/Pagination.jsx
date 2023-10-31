import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../redux/actions/pokemonActions';
import styles from './Pagination.module.css';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.pokemons.currentPage);
  const totalPages = useSelector(state => state.pokemons.totalPages);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  return (
    <div className={styles.paginationContainer}>
      <button className={styles.pageButton} onClick={handlePrevPage} disabled={currentPage === 1}>
        Prev
      </button>
      <span className={styles.pageNumber}>
        {currentPage} / {totalPages}
      </span>
      <button className={styles.pageButton} onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
