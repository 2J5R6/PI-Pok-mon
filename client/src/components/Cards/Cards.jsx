import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../../redux/actions/pokemonActions';
import Card from './Card';
import './Cards.module.css';

const Cards = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons.data);
  const loading = useSelector(state => state.pokemons.loading);
  const error = useSelector(state => state.pokemons.error);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="errorMessage">{error}</p>;

  return (
    <div className="cardsContainer">
      {pokemons.map(pokemon => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Cards;
