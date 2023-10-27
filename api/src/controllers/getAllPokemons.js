const { Pokemon, Type } = require('../db.js');
const axios = require('axios');

module.exports = async (req, res, next) => {
  try {
    const { source } = req.query;

    if (source === 'db') {
      let pokemons = await Pokemon.findAll({
        attributes: ['id', 'name', 'image', 'hp', 'attack', 'defense', 'speed', 'height', 'weight'],
        include: {
          model: Type,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },
      });

      if (pokemons.length === 0) {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        const pokemonList = response.data.results;

        const detailedPokemons = await Promise.all(pokemonList.map(async (pokemon) => {
          const detailedResponse = await axios.get(pokemon.url);
          return {
            id: detailedResponse.data.id,
            name: detailedResponse.data.name,
            image: detailedResponse.data.sprites.front_default,
            hp: detailedResponse.data.stats[0].base_stat,
            attack: detailedResponse.data.stats[1].base_stat,
            defense: detailedResponse.data.stats[2].base_stat,
            speed: detailedResponse.data.stats[5].base_stat,
            height: detailedResponse.data.height,
            weight: detailedResponse.data.weight,
            types: detailedResponse.data.types.map(type => type.type.name),
          };
        }));

        for (let pokemon of detailedPokemons) {
          await Pokemon.create(pokemon);
        }

        pokemons = detailedPokemons;
      }

      const formattedPokemons = pokemons.map(pokemon => {
        return {
          ...pokemon.dataValues,
          types: pokemon.dataValues.types.map(type => type.name)
        };
      });

      return res.status(200).send(formattedPokemons);
    } else if (source === 'api') {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      const pokemonList = response.data.results;

      const detailedPokemons = await Promise.all(pokemonList.map(async (pokemon) => {
        const detailedResponse = await axios.get(pokemon.url);
        return {
          id: detailedResponse.data.id,
          name: detailedResponse.data.name,
          image: detailedResponse.data.sprites.front_default,
          hp: detailedResponse.data.stats[0].base_stat,
          attack: detailedResponse.data.stats[1].base_stat,
          defense: detailedResponse.data.stats[2].base_stat,
          speed: detailedResponse.data.stats[5].base_stat,
          height: detailedResponse.data.height,
          weight: detailedResponse.data.weight,
          types: detailedResponse.data.types.map(type => type.type.name),
        };
      }));

      return res.status(200).send(detailedPokemons);
    } else {
      return res.status(400).send({ message: 'Fuente no especificada o no válida.' });
    }
  } catch (error) {
    next(error);
  }
};
