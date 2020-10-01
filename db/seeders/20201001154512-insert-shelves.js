'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shelves', [
      { name: 'Favorites', userId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Currently Reading', userId: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Book Club', userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Want to Read', userId: 4, createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shelves', null, {});
  }
};
