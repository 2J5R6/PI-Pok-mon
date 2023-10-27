const { Pokemon, Type } = require('../db.js');
const axios = require('axios');

module.exports = async (req, res, next) => {
  try {
    const { name } = req.query;
    const { source } = req.query;

    if (!name) {
      return res.status(400).send({ message: 'El nombre del Pokémon es requerido.' });
    }

    let pokemon;

    if (source === 'db') {
      pokemon = await Pokemon.findOne({
        where: { name: name.toLowerCase() },
        include: {
          model: Type,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },
      });
    } else if (source === 'api') {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      pokemon = {
        name: response.data.name,
        image: response.data.sprites.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        speed: response.data.stats[5].base_stat,
        height: response.data.height,
        weight: response.data.weight,
        types: response.data.types.map(type => type.type.name),
      };
    }

    if (!pokemon) {
      return res.status(404).send({ message: 'Pokémon no encontrado.' });
    }

    return res.status(200).send(pokemon);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return res.status(404).send({ message: 'Pokémon no encontrado.' });
    }
    next(error);
  }
};
