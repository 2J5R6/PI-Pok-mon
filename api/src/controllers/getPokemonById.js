const { Pokemon, Type } = require('../db.js');
const axios = require('axios');

module.exports = async (req, res, next) => {
  try {
    const { idPokemon } = req.params;
    const { source } = req.query;

    let pokemon;

    if (source === 'db') {
      pokemon = await Pokemon.findByPk(idPokemon, {
        include: {
          model: Type,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },
      });
    } else if (source === 'api') {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
      pokemon = response.data;
    }

    if (!pokemon) {
      return res.status(404).send({ message: 'Pokémon no encontrado.' });
    }

    return res.status(200).send(pokemon);
  } catch (error) {
    next(error);
  }
};
