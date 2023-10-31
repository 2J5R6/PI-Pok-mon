import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';

const Filters = () => {
  const [selectedType, setSelectedType] = useState('');
  const [order, setOrder] = useState('');
  const dispatch = useDispatch();

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    // Aquí iría la acción para filtrar por tipo
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
    // Aquí iría la acción para ordenar
  };

  return (
    <div className={styles.filterContainer}>
      <label>Filtrar por Tipo:</label>
      <select value={selectedType} onChange={handleTypeChange}>
        <option value="">Todos</option>
        {/* Aquí se mapearían los tipos de Pokémon */}
        {['normal', 'fighting', 'flying', ...].map(type => (
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
