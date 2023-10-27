const { Pokemon, Type } = require('../db.js');

module.exports = async (req, res, next) => {
  try {
    const { name, image, life, attack, defense, speed, height, weight, types } = req.body;

    // Obtener el ID más grande en la base de datos y agregar 1 para generar un ID único
    const maxId = await Pokemon.max('id');
    const newId = maxId > 100 ? maxId + 1 : 101;

    // Creamos el Pokémon en la base de datos
    const newPokemon = await Pokemon.create({
      id: newId,
      name,
      image,
      life,
      attack,
      defense,
      speed,
      height,
      weight
    });

    // Asociamos los tipos al Pokémon
    const typesInDb = await Type.findAll({ where: { name: types } });
    await newPokemon.setTypes(typesInDb);

    return res.status(201).send(newPokemon);
  } catch (error) {
    next(error);
  }
};