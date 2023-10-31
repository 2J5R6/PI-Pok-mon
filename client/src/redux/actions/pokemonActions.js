import axios from 'axios';
import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  CREATE_POKEMON_SUCCESS,
  CREATE_POKEMON_FAILURE,
  TOGGLE_FAVORITE,
  FETCH_POKEMON_BY_NAME_OR_ID_REQUEST,
  FETCH_POKEMON_BY_NAME_OR_ID_SUCCESS,
  FETCH_POKEMON_BY_NAME_OR_ID_FAILURE
} from './actionTypes';

const BASE_URL = 'http://localhost:3001/pokemons';

export const fetchPokemons = (source = 'db') => async (dispatch) => {
  dispatch({ type: FETCH_POKEMONS_REQUEST });
  try {
    const response = await axios.get(`${BASE_URL}?source=${source}`);
    dispatch({ type: FETCH_POKEMONS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_POKEMONS_FAILURE, payload: error.message });
  }
};

export const createPokemon = (pokemonData) => async (dispatch) => {
  try {
    const response = await axios.post(BASE_URL, pokemonData);
    dispatch({ type: CREATE_POKEMON_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: CREATE_POKEMON_FAILURE, payload: error.message });
  }
};

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = (pokemonId) => ({
  type: TOGGLE_FAVORITE,
  payload: pokemonId
});

export const getPokemonByNameOrId = (nameOrId) => async (dispatch) => {
  dispatch({ type: FETCH_POKEMON_BY_NAME_OR_ID_REQUEST });
  try {
    const response = await axios.get(`${BASE_URL}/${nameOrId}`);
    dispatch({ type: FETCH_POKEMON_BY_NAME_OR_ID_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_POKEMON_BY_NAME_OR_ID_FAILURE, payload: error.message });
  }
};

