// pokemonActions.js
import axios from 'axios';
import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  CREATE_POKEMON_REQUEST,
  CREATE_POKEMON_SUCCESS,
  CREATE_POKEMON_FAILURE,
} from './actionTypes';

export const fetchPokemons = () => {
  return (dispatch) => {
    dispatch(fetchPokemonsRequest());
    axios
      .get('/pokemons')
      .then((response) => {
        dispatch(fetchPokemonsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchPokemonsFailure(error.message));
      });
  };
};

const fetchPokemonsRequest = () => {
  return {
    type: FETCH_POKEMONS_REQUEST,
  };
};

const fetchPokemonsSuccess = (pokemons) => {
  return {
    type: FETCH_POKEMONS_SUCCESS,
    payload: pokemons,
  };
};

const fetchPokemonsFailure = (error) => {
  return {
    type: FETCH_POKEMONS_FAILURE,
    payload: error,
  };
};

export const createPokemon = (pokemonData) => {
  return (dispatch) => {
    dispatch(createPokemonRequest());
    axios
      .post('/pokemons', pokemonData)
      .then((response) => {
        dispatch(createPokemonSuccess(response.data));
      })
      .catch((error) => {
        dispatch(createPokemonFailure(error.message));
      });
  };
};

const createPokemonRequest = () => {
  return {
    type: CREATE_POKEMON_REQUEST,
  };
};

const createPokemonSuccess = (pokemon) => {
  return {
    type: CREATE_POKEMON_SUCCESS,
    payload: pokemon,
  };
};

const createPokemonFailure = (error) => {
  return {
    type: CREATE_POKEMON_FAILURE,
    payload: error,
  };
};
