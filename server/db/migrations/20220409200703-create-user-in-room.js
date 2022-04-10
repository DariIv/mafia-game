'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserInRooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      room_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Rooms',
          key: 'id',
        },
      },
      role: {
        type: Sequelize.ENUM,
        values: ['Мирный житель', 'Мафия', 'Доктор', 'Детектив', 'Мертвец'],
      },
      creator: {
        type: Sequelize.BOOLEAN,
      },
      is_alive: {
        type: Sequelize.BOOLEAN,
      },
      socket_id: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserInRooms');
  }
};
