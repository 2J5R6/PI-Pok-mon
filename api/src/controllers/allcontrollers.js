const getAllPokemons = require('./getAllPokemonsController');
const getPokemonById = require('./getPokemonByIdController');
const getPokemonByName = require('./getPokemonByNameController');
const createPokemon = require('./createPokemonController');
const getAllTypes = require('./getAllTypesController');

module.exports = {
  getAllPokemons,
  getPokemonById,
  getPokemonByName,
  createPokemon,
  getAllTypes
};
