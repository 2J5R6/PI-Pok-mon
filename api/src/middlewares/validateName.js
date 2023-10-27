module.exports = (req, res, next) => {
    const { name } = req.params;
  
    if (!name || typeof name !== 'string') {
      
      return res.status(400).send({ message: 'El nombre proporcionado no es válido.' });
    }
  
    next();
  };
  