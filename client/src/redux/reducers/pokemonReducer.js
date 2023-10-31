// pokemonReducer.js
import {
    FETCH_POKEMONS_REQUEST,
    FETCH_POKEMONS_SUCCESS,
    FETCH_POKEMONS_FAILURE,
    CREATE_POKEMON_REQUEST,
    CREATE_POKEMON_SUCCESS,
    CREATE_POKEMON_FAILURE,
  } from '../actions/actionTypes';
  
  const initialState = {
    loading: false,
    pokemons: [],
    error: '',
  };
  
  const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POKEMONS_REQUEST:
      case CREATE_POKEMON_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_POKEMONS_SUCCESS:
        return {
          ...state,
          loading: false,
          pokemons: action.payload,
          error: '',
        };
      case FETCH_POKEMONS_FAILURE:
      case CREATE_POKEMON_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case CREATE_POKEMON_SUCCESS:
        return {
          ...state,
          loading: false,
          pokemons: [...state.pokemons, action.payload],
          error: '',
        };
      default:
        return state;
    }
  };
  
  export default pokemonReducer;
  