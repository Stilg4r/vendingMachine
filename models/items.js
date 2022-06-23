'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  items.init({
      menus_id: {
        type: DataTypes.INTEGER
      },
      categories_id: {
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT
      },
      size: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      unid: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      image_path: {
        type: DataTypes.STRING
      },
      deleted: {
        type: DataTypes.BOOLEAN
      },
  }, {
    sequelize,
    modelName: 'items',
  });
  return items;
};