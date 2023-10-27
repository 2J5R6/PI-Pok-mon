const { Pokemon, Type } = require('../db.js');
const axios = require('axios');

module.exports = async (req, res, next) => {
  try {
    const { name } = req.query;
    const { source } = req.query;

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
