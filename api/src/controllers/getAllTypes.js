const { Type } = require('../db.js');
const axios = require('axios');

module.exports = async (req, res, next) => {
  try {
    let types = await Type.findAll();

    // Si no hay tipos en la base de datos, los obtenemos de la API y los guardamos en la base de datos.
    if (types.length === 0) {
      const response = await axios.get('https://pokeapi.co/api/v2/type');
      const apiTypes = response.data.results;

      // Guardamos los tipos en la base de datos
      types = await Type.bulkCreate(apiTypes.map(type => ({ name: type.name })));
    }

    return res.status(200).send(types);
  } catch (error) {
    next(error);
  }
};
