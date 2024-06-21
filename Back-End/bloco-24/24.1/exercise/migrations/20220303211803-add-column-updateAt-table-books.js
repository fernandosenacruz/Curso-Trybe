'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('Books', 'updatedAt', {
     type: Sequelize.DATE,
   });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Books', 'updatedAt');
  }
};
