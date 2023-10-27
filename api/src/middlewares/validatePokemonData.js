module.exports = (req, res, next) => {
    const { name, image, life, attack, defense, speed, height, weight, types } = req.body;
  
    if (!name || typeof name !== 'string') {
      return res.status(400).send({ message: 'El nombre proporcionado no es válido.' });
    }
  
    // if (!image || typeof image !== 'string') {
    //   return res.status(400).send({ message: 'La imagen proporcionada no es válida.' });
    // }
  
    if (!types || !Array.isArray(types) || types.length === 0) {
      return res.status(400).send({ message: 'Debe proporcionar al menos un tipo de Pokémon.' });
    }
  
    next();
  };
  