'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserInRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserInRoom.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    room_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Rooms',
        key: 'id',
      },
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Roles',
        key: 'id',
      },
    },
    creator: {
      type: DataTypes.BOOLEAN,
    },
    is_alive: {
      type: DataTypes.BOOLEAN,
    },
    socket_id: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'UserInRoom',
  });
  return UserInRoom;
};
