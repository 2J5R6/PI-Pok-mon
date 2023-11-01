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
  SORT_BY_NAME_DESC
} from '../actions/actionTypes';

const initialState = {
  pokemons: [],
  isLoading: false,
  error: null,
  createdPokemon: null,
  favorites: [],
  selectedPokemon: null,
  dataSource: 'db'  // Fuente de datos por defecto
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_POKEMONS_SUCCESS:
      return { ...state, isLoading: false, pokemons: action.payload };
    case FETCH_POKEMONS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case CREATE_POKEMON_SUCCESS:
      return { ...state, createdPokemon: action.payload };
    case CREATE_POKEMON_FAILURE:
      return { ...state, error: action.payload };
    case TOGGLE_FAVORITE:
      const isFavorite = state.favorites.includes(action.payload);
      return {
        ...state,
        favorites: isFavorite 
          ? state.favorites.filter(id => id !== action.payload)
          : [...state.favorites, action.payload]
      };
    case FETCH_POKEMON_BY_NAME_OR_ID_REQUEST:
      return { ...state, isLoading: true, error: null, selectedPokemon: null };
    case FETCH_POKEMON_BY_NAME_OR_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemons: [action.payload], // Asegúrate de que los datos se almacenen en un array
        selectedPokemon: action.payload
    };
    case FETCH_POKEMON_BY_NAME_OR_ID_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case SET_DATA_SOURCE:
      return { ...state, dataSource: action.payload };
    case SORT_BY_ID_ASC:
      return {
        ...state,
        pokemons: [...state.pokemons].sort((a, b) => a.id - b.id)
      };
    case SORT_BY_ID_DESC:
      return {
        ...state,
        pokemons: [...state.pokemons].sort((a, b) => b.id - a.id)
      };
    case SORT_BY_NAME_ASC:
      return {
        ...state,
        pokemons: [...state.pokemons].sort((a, b) => a.name.localeCompare(b.name))
      };
    case SORT_BY_NAME_DESC:
      return {
        ...state,
        pokemons: [...state.pokemons].sort((a, b) => b.name.localeCompare(a.name))
      };
    default:
      return state;
  }
};

export default pokemonReducer;
