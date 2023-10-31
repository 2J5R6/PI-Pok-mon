import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import modeReducer from './modeReducer';

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  mode: modeReducer
});

export default rootReducer;
