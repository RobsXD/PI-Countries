const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Activities", {
    key: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      validate: {
        is: /^[A-Z]{3}$/,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1,
        max: 5,
      },
    },
    duration: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    season: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
