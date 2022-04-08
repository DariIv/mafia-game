'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Room.init({
    name: {
      type: DataTypes.STRING,
    },
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Game',
        key: 'id',
      },
    },
    status: {
      type: DataTypes.STRING,
    },
    max_players: {
      type: DataTypes.INTEGER,
    },
    room_hash: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};
