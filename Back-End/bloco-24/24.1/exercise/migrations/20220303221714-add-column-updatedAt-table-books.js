'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books',
    [
      {
        title: 'The Lords of the rings',
        author: 'J. R. R. Tolkien',
        pageQuantity: 432,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updateAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'O fantástico mundo dos números',
        author: 'Ian Stewart',
        pageQuantity: 382,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updateAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};
