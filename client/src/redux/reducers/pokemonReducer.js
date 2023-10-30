import {
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  SEARCH_POKEMON,
  GET_POKEMON_TYPES,
  FILTER_POKEMONS_BY_TYPE,
  CREATE_POKEMON
} from '../actions/pokemonActions';

const initialState = {
  pokemons: [],
  pokemonDetail: {},
  pokemonTypes: [],
  searchedPokemon: [],
  createdPokemon: {}
};

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
      case GET_POKEMONS:
          return {
              ...state,
              pokemons: Array.isArray(action.payload) ? action.payload : []
          };
      case GET_POKEMON_DETAIL:
          return {
              ...state,
              pokemonDetail: action.payload || {}
          };
      case SEARCH_POKEMON:
          return {
              ...state,
              searchedPokemon: Array.isArray(action.payload) ? action.payload : []
          };
      case GET_POKEMON_TYPES:
          return {
              ...state,
              pokemonTypes: Array.isArray(action.payload) ? action.payload : []
          };
      case FILTER_POKEMONS_BY_TYPE:
          return {
              ...state,
              pokemons: Array.isArray(action.payload) ? action.payload : []
          };
      case CREATE_POKEMON:
          return {
              ...state,
              createdPokemon: action.payload || {}
          };
      default:
          return state;
  }
}

export default pokemonReducer;
