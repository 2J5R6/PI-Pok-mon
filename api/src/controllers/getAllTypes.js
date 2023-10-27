const { Type } = require('../db.js');
const axios = require('axios');

module.exports = async (req, res, next) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/type');
    const apiTypes = response.data.results;

    // Verificamos y guardamos los tipos en la base de datos si no existen
    for (let type of apiTypes) {
      let [instance, created] = await Type.findOrCreate({
        where: { name: type.name },
        defaults: { name: type.name }
      });
    }

    const types = await Type.findAll();
    return res.status(200).send(types);
  } catch (error) {
    next(error);
  }
};
