const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
    getAllPokemons,
    getPokemonById,
    getPokemonByName,
    getAllTypes,
    createPokemon
    } = require('../controllers/allcontrollers');

const validateSource = require('../middlewares/validateSource');
const validateId = require('../middlewares/validateId.js');
const validateName = require('../middlewares/validateName.js');
const validatePokemonData = require('../middlewares/validatePokemonData.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', validateSource, getAllPokemons);
router.get('/pokemons/:idPokemon', validateId, getPokemonById);
router.get('/pokemons/name', validateName, getPokemonByName);
router.get('/types', getAllTypes);
router.post('/pokemons', validatePokemonData, createPokemon);








module.exports = router;
