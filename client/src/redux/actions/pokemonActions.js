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
  FETCH_POKEMON_BY_NAME_OR_ID_FAILURE,
  SET_DATA_SOURCE,
} from './actionTypes';
import store from '../store';

const BASE_URL = 'http://localhost:3001/pokemons';

export const fetchPokemons = () => async (dispatch) => {
  const source = store.getState().pokemon.dataSource;
  dispatch({ type: FETCH_POKEMONS_REQUEST });
  try {
    const response = await axios.get(`${BASE_URL}?source=${source}`);
    dispatch({ type: FETCH_POKEMONS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_POKEMONS_FAILURE, payload: error.message });
  }
};
// export const fetchPokemons = (source = 'db') => async (dispatch) => {
//   dispatch({ type: FETCH_POKEMONS_REQUEST });
//   try {
//     const response = await axios.get(`${BASE_URL}?source=${source}`);
//     dispatch({ type: FETCH_POKEMONS_SUCCESS, payload: response.data });
//   } catch (error) {
//     dispatch({ type: FETCH_POKEMONS_FAILURE, payload: error.message });
//   }
// };

export const createPokemon = (pokemonData) => async (dispatch) => {
  try {
    const response = await axios.post(BASE_URL, pokemonData);
    dispatch({ type: CREATE_POKEMON_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: CREATE_POKEMON_FAILURE, payload: error.message });
  }
};

export const toggleFavorite = (pokemonId) => ({
  type: TOGGLE_FAVORITE,
  payload: pokemonId
});

export const getPokemonByNameOrId = (query, type) => async (dispatch) => {
  dispatch({ type: FETCH_POKEMON_BY_NAME_OR_ID_REQUEST });
  try {
    let response;
    if (type === "id") {
      response = await axios.get(`${BASE_URL}/id/${query}?source=db`);
    } else if (type === "name") {
      response = await axios.get(`${BASE_URL}/name/${query}?source=db`);
    }
    dispatch({ type: FETCH_POKEMON_BY_NAME_OR_ID_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_POKEMON_BY_NAME_OR_ID_FAILURE, payload: error.message });
  }
};

export const filterPokemonsByType = (type, source = 'db') => async (dispatch) => {
  dispatch({ type: FETCH_POKEMONS_REQUEST });
  try {
    const response = await axios.get(`${BASE_URL}/type/${type}?source=${source}`);
    dispatch({ type: FETCH_POKEMONS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_POKEMONS_FAILURE, payload: error.message });
  }
};

// Acción para cambiar la fuente de datos
export const setDataSource = (source) => ({
  type: SET_DATA_SOURCE,
  payload: source
});