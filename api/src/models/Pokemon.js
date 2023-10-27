const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('pokemon', {
    // ID del Pokemon
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    // Nombre del Pokemon
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    // Imagen del Pokemon
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },

    // Vida del Pokemon
    hp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    // Ataque del Pokemon
    attack: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    // Defensa del Pokemon
    defense: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    // Velocidad del Pokemon
    speed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    // Altura del Pokemon
    height: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    // Peso del Pokemon
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    // Descripción (opcional, basado en la sugerencia)
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, { timestamps: false });
};
