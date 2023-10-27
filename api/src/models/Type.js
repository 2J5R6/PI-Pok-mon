const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('type', {
    // ID del Tipo
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    // Nombre del Tipo
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    // Opciones adicionales para el modelo
    indexes: [
      {
        unique: true,
        fields: ['name']
      }
    ]
  }, { timestamps: false });
};
