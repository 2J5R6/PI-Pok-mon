module.exports = (req, res, next) => {
    const { idPokemon } = req.params;
  
    if (!idPokemon || isNaN(idPokemon) || parseInt(idPokemon) <= 0) {
      console.log('entramos')
      return res.status(400).send({ message: 'El ID proporcionado no es válido.' });
    }
  
    next();
  };
  