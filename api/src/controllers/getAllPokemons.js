const { Pokemon, Type } = require('../db.js');
const axios = require('axios');

module.exports = async (req, res, next) => {
  try {
    const { source } = req.query;

    let pokemons;

    if (source === 'db') {
      pokemons = await Pokemon.findAll({
        include: {
          model: Type,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        },
      });
    } else if (source === 'api') {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      pokemons = response.data.results;
    }

    return res.status(200).send(pokemons);
  } catch (error) {
    next(error);
  }
};
