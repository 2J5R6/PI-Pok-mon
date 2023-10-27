const { Pokemon, Type } = require('../db.js');
const axios = require('axios');

module.exports = async (req, res, next) => {
  const { typeName } = req.params;
  const { source } = req.query;

  try {
    if (source === 'db') {
      const type = await Type.findOne({
        where: { name: typeName },
        include: Pokemon
      });

      if (!type) {
        return res.status(404).send('Tipo no encontrado en la base de datos.');
      }

      return res.status(200).send(type.pokemons);
    } else if (source === 'api') {
      const response = await axios.get(`https://pokeapi.co/api/v2/type/${typeName}`);
      const pokemons = response.data.pokemon.map(p => ({
        id: p.pokemon.url.split('/')[6],
        name: p.pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.pokemon.url.split('/')[6]}.png`
      }));

      return res.status(200).send(pokemons);
    } else {
      return res.status(400).send('Fuente no válida. Utilice "db" o "api".');
    }
  } catch (error) {
    next(error);
  }
};
