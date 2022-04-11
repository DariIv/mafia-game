const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserInRoom extends Model {
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
    role: {
      type: DataTypes.ENUM,
      values: ['Мирный житель', 'Мафия', 'Доктор', 'Детектив', 'Мертвец'],
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
