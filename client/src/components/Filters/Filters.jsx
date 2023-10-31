import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setDataSource,
  filterByType,
  sortByIdAsc,
  sortByIdDesc,
  sortByNameAsc,
  sortByNameDesc
} from '../../redux/actions/pokemonActions';
import styles from './Filters.module.css';

const Filters = () => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState('');
  const [selectedSource, setSelectedSource] = useState('db');
  const [selectedSort, setSelectedSort] = useState('');

  const types = [
    'Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock',
    'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass',
    'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark',
    'Fairy', 'Unknown', 'Shadow'
  ];

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleSourceChange = (e) => {
    setSelectedSource(e.target.value);
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };

  const applyFilters = () => {
    if (selectedType) {
      dispatch(filterByType(selectedType));
    }
    dispatch(filterBySource(selectedSource));
    if (selectedSort) {
      dispatch(sortBy(selectedSort));
    }
  };

  return (
    <div className={styles.filtersContainer}>
      <h2 className={styles.filterTitle}>Filters</h2>
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Type:</label>
        <select value={selectedType} onChange={handleTypeChange}>
          <option value="">All</option>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Source:</label>
        <select value={selectedSource} onChange={handleSourceChange}>
          <option value="db">Database</option>
          <option value="api">API</option>
        </select>
      </div>
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Sort By:</label>
        <select value={selectedSort} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="id">ID</option>
          <option value="name">Name</option>
        </select>
      </div>
      <button onClick={applyFilters} className={styles.filterButton}>Apply Filters</button>
    </div>
  );
};

export default Filters;
