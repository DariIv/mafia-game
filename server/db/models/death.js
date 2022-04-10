'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Death extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Death.init({
    story_for_all: DataTypes.TEXT,
    story_for_killed: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Death',
  });
  return Death;
};