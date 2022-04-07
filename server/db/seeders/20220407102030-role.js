module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Roles', [
      {
        mafia_role: 'Маньяк',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mafia_role: 'Мафия',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mafia_role: 'Коммисар',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mafia_role: 'Доктор',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mafia_role: 'Любовница',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mafia_role: 'Мирный житель',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  },
};
