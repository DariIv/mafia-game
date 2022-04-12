module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Deaths', [
      {
        storyForAll: 'кофе игрока отравили этой ночью',
        storyForKilled: 'ты мертв(а), твое кофе было отравленным',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storyForAll: 'игрока нашли мертвым в Неве',
        storyForKilled: 'тебя утопили в Неве',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storyForAll: 'части тела игрока валяются по всему Восстания',
        storyForKilled: 'тебя расчленили в центре Питера',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        storyForAll: 'игрока нашли повешенным в метро на Чернышевской',
        storyForKilled: 'тебя убили и сделали вид, что это суицид',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Deaths', null, {});
  },
};
