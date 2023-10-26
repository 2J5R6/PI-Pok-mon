const { Pokemon, Type } = require('../db.js');

module.exports = async (req, res, next) => {
    try {
      const { name, image, life, attack, defense, speed, height, weight, types } = req.body;

      // Validación básica
      if (!name || !image || !life || !attack || !defense) {
        return res.status(400).send({ message: 'Faltan campos obligatorios' });
      }

      // Crear el Pokémon en la base de datos
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

      // Asociar los tipos al Pokémon
      if (types && types.length) {
        const typesInDb = await Type.findAll({ where: { name: types } });
        await newPokemon.setTypes(typesInDb);
      }

      return res.status(201).send(newPokemon);

    } catch (error) {
      next(error);
    }
};
