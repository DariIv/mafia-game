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
      this.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
			this.belongsTo(models.Room, { foreignKey: 'room_id', onDelete: 'CASCADE' });
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
