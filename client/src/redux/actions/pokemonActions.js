import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL';
export const SEARCH_POKEMON = 'SEARCH_POKEMON';
export const GET_POKEMON_TYPES = 'GET_POKEMON_TYPES';
export const FILTER_POKEMONS_BY_TYPE = 'FILTER_POKEMONS_BY_TYPE';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const ORDER_POKEMONS = 'ORDER_POKEMONS';

const API_URL = 'http://localhost:3001';

export function getAllPokemons(source = 'db') {
  return function(dispatch) {
    return axios.get(`${API_URL}/pokemons?source=${source}`)
      .then(response => {
        dispatch({ type: GET_POKEMONS, payload: response.data });
      });
  };
}

export function getPokemonDetail(id, source = 'db') {
  return function(dispatch) {
    return axios.get(`${API_URL}/pokemons/id/${id}?source=${source}`)
      .then(response => {
        dispatch({ type: GET_POKEMON_DETAIL, payload: response.data });
      });
  };
}

export function searchPokemon(name, source = 'db') {
  return function(dispatch) {
    return axios.get(`${API_URL}/pokemons/name/${name}?source=${source}`)
      .then(response => {
        dispatch({ type: SEARCH_POKEMON, payload: response.data });
      });
  };
}

export function getPokemonTypes() {
  return function(dispatch) {
    return axios.get(`${API_URL}/types`)
      .then(response => {
        dispatch({ type: GET_POKEMON_TYPES, payload: response.data });
      });
  };
}

export function filterPokemonsByType(typeName, source = 'db') {
  return function(dispatch) {
    return axios.get(`${API_URL}/pokemons/type/${typeName}?source=${source}`)
      .then(response => {
        dispatch({ type: FILTER_POKEMONS_BY_TYPE, payload: response.data });
      });
  };
}

export function createPokemon(pokemonData) {
  return function(dispatch) {
    return axios.post(`${API_URL}/pokemons`, pokemonData)
      .then(response => {
        dispatch({ type: CREATE_POKEMON, payload: response.data });
      });
  };
}

export function orderBy(orderType) {
  return { type: ORDER_POKEMONS, payload: orderType };
}
