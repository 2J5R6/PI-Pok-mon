import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  // Aquí puedes agregar otros reducers en el futuro
});

export default rootReducer;
