// validateSource.js
module.exports = (req, res, next) => {
    const { source } = req.query;
  
    if (!source) {
      return res.status(400).send({ message: 'Falta especificar la fuente de los datos (db o api)' });
    }
  
    if (source !== 'db' && source !== 'api') {
      return res.status(400).send({ message: 'La fuente especificada no es válida. Debe ser "db" o "api".' });
    }
  
    next();
  };
  