const { Pokemon, Type } = require('../db');
const axios = require('axios');

const getAllPokemons = async (req, res, next) => {
    const { source } = req.query;

    try {
        if (source === 'db') {
            const dbPokemons = await Pokemon.findAll({
                include: Type,
                attributes: ['id', 'name', 'image', 'hp', 'attack', 'defense', 'speed', 'height', 'weight']
            });

            // Si no hay Pokémon en la base de datos, obtenemos los primeros 100 de la API y los guardamos en la base de datos.
            if (dbPokemons.length === 0) {
                const apiPokemons = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
                const pokemonData = await Promise.all(apiPokemons.data.results.map(pokemon => axios.get(pokemon.url)));
                
                const pokemonsToSave = pokemonData.map(pokemon => ({
                    id: pokemon.data.id,
                    name: pokemon.data.name,
                    image: pokemon.data.sprites.front_default,
                    hp: pokemon.data.stats[0].base_stat,
                    attack: pokemon.data.stats[1].base_stat,
                    defense: pokemon.data.stats[2].base_stat,
                    speed: pokemon.data.stats[5].base_stat,
                    height: pokemon.data.height,
                    weight: pokemon.data.weight
                }));

                await Pokemon.bulkCreate(pokemonsToSave);
                return res.json(pokemonsToSave);
            }

            return res.json(dbPokemons);
        } else if (source === 'api') {
            const apiPokemons = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
            const pokemonData = await Promise.all(apiPokemons.data.results.map(pokemon => axios.get(pokemon.url)));
            
            const pokemonsToReturn = pokemonData.map(pokemon => ({
                id: pokemon.data.id,
                name: pokemon.data.name,
                image: pokemon.data.sprites.front_default,
                hp: pokemon.data.stats[0].base_stat,
                attack: pokemon.data.stats[1].base_stat,
                defense: pokemon.data.stats[2].base_stat,
                speed: pokemon.data.stats[5].base_stat,
                height: pokemon.data.height,
                weight: pokemon.data.weight
            }));

            return res.json(pokemonsToReturn);
        } else {
            return res.status(400).json({ message: "La fuente proporcionada no es válida." });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = getAllPokemons;
