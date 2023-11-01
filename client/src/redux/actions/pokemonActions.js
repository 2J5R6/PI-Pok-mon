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
  SORT_BY_ID_ASC,
  SORT_BY_ID_DESC,
  SORT_BY_NAME_ASC,
  SORT_BY_NAME_DESC,
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
    console.error("Error fetching pokemons:", error);
    dispatch({ type: FETCH_POKEMONS_FAILURE, payload: error.message });
  }
};

export const createPokemon = (pokemonData) => async (dispatch) => {
  try {
    const response = await axios.post(BASE_URL, pokemonData);
    dispatch({ type: CREATE_POKEMON_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error creating pokemon:", error);
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
    console.error("Error fetching pokemon by name or ID:", error);
    dispatch({ type: FETCH_POKEMON_BY_NAME_OR_ID_FAILURE, payload: error.message });
  }
};

export const filterPokemonsByType = (type, source = 'db') => async (dispatch, getState) => {
  dispatch({ type: FETCH_POKEMONS_REQUEST });
  try {
    const response = await axios.get(`${BASE_URL}/type/${type}?source=${source}`);
    const allPokemons = getState().pokemons.allPokemons; // Obtener todos los Pokémon del estado
    const filteredPokemons = response.data.filter(pokemon => 
      allPokemons.some(p => p.id === pokemon.id)
    ); // Filtrar solo los Pokémon que ya están en el estado
    dispatch({ type: FETCH_POKEMONS_SUCCESS, payload: filteredPokemons });
  } catch (error) {
    console.error("Error filtering pokemons by type:", error);
    dispatch({ type: FETCH_POKEMONS_FAILURE, payload: error.message });
  }
};


export const setDataSource = (source) => ({
  type: SET_DATA_SOURCE,
  payload: source
});

export const sortByIdAsc = () => ({
  type: SORT_BY_ID_ASC
});

export const sortByIdDesc = () => ({
  type: SORT_BY_ID_DESC
});

export const sortByNameAsc = () => ({
  type: SORT_BY_NAME_ASC
});

export const sortByNameDesc = () => ({
  type: SORT_BY_NAME_DESC
});
