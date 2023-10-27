const { Pokemon, Type } = require('../db');
const axios = require('axios');

const getPokemonByName = async (req, res, next) => {
    const { name } = req.query;
    const { source } = req.query;

    try {
        if (source === 'db') {
            const dbPokemon = await Pokemon.findOne({
                where: { name: name.toLowerCase() },
                include: Type,
                attributes: ['id', 'name', 'image', 'hp', 'attack', 'defense', 'speed', 'height', 'weight']
            });

            if (!dbPokemon) {
                return res.status(404).json({ message: "No se encontró el Pokémon en la base de datos." });
            }

            return res.json(dbPokemon);
        } else if (source === 'api') {
            const apiPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);

            if (!apiPokemon.data) {
                return res.status(404).json({ message: "No se encontró el Pokémon en la API." });
            }

            const pokemonToReturn = {
                id: apiPokemon.data.id,
                name: apiPokemon.data.name,
                image: apiPokemon.data.sprites.front_default,
                hp: apiPokemon.data.stats[0].base_stat,
                attack: apiPokemon.data.stats[1].base_stat,
                defense: apiPokemon.data.stats[2].base_stat,
                speed: apiPokemon.data.stats[5].base_stat,
                height: apiPokemon.data.height,
                weight: apiPokemon.data.weight
            };

            return res.json(pokemonToReturn);
        } else {
            return res.status(400).json({ message: "La fuente proporcionada no es válida." });
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return res.status(404).json({ message: "No se encontró el Pokémon." });
        }
        next(error);
    }
};

module.exports = getPokemonByName;
