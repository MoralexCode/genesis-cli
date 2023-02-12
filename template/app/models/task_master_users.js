"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class {{name}}_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  {{name}}_users.init(
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      nickname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      confirmed: DataTypes.BOOLEAN,
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      enable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "{{name}}_users",
    }
  );
  return {{name}}_users;
};
