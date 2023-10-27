const { Router } = require('express');

// Importación de controladores
const {
    getAllPokemons,
    getPokemonById,
    getPokemonByName,
    getAllTypes,
    getPokemonsByType,
    createPokemon
} = require('../controllers/allcontrollers');

// Importación de middlewares de validación
const validateSource = require('../middlewares/validateSource');
const validateId = require('../middlewares/validateId.js');
const validateName = require('../middlewares/validateName.js');
const validatePokemonData = require('../middlewares/validatePokemonData.js');

const router = Router();

//* Rutas para obtener información de Pokemons y Types

// Ruta para obtener todos los Pokemons
router.get('/pokemons', validateSource, getAllPokemons);

// Ruta para obtener un Pokemon específico por nombre
router.get('/pokemons/name/:name', validateName, getPokemonByName);

// Ruta para obtener un Pokemon específico por ID
router.get('/pokemons/id/:idPokemon', validateId, getPokemonById);

// Ruta para obtener todos los tipos de Pokemons
router.get('/types', getAllTypes);

// Ruta para obtener pokemones por tipo
router.get('/pokemons/type/:typeName', getPokemonsByType);

// Ruta para crear un nuevo Pokemon
router.post('/pokemons', validatePokemonData, createPokemon);

module.exports = router;

