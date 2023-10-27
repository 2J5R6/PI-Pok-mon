const { Pokemon, Type } = require('../db.js');

module.exports = async (req, res, next) => {
  try {
    const { name, image, life, attack, defense, speed, height, weight, types } = req.body;

    // Creamos el Pokémon en la base de datos
    const newPokemon = await Pokemon.create({
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
