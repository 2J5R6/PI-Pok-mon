import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByType, orderBy } from '../../redux/actions/pokemonActions';
import styles from './Filter.module.css';

const Filters = () => {
  const [selectedType, setSelectedType] = useState('');
  const [order, setOrder] = useState('');
  const dispatch = useDispatch();

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    dispatch(filterByType(e.target.value));
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
    dispatch(orderBy(e.target.value));
  };

  const pokemonTypes = [
    'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire',
    'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow'
  ];

  return (
    <div className={styles.filterContainer}>
      <label>Filtrar por Tipo:</label>
      <select value={selectedType} onChange={handleTypeChange}>
        <option value="">Todos</option>
        {pokemonTypes.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>

      <label>Ordenar por:</label>
      <select value={order} onChange={handleOrderChange}>
        <option value="">Seleccionar</option>
        <option value="id-asc">ID Ascendente</option>
        <option value="id-desc">ID Descendente</option>
        <option value="name-asc">Nombre A-Z</option>
        <option value="name-desc">Nombre Z-A</option>
      </select>
    </div>
  );
};

export default Filters;
