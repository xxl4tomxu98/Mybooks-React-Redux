'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Book_Shelves', [
      { bookId: 1, shelfId: 3, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 2, shelfId: 3, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 3, shelfId: 3, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 4, shelfId: 3, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 5, shelfId: 3, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 6, shelfId: 3, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 7, shelfId: 3, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 8, shelfId: 3, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 9, shelfId: 3, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 10, shelfId: 3, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 11, shelfId: 4, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 12, shelfId: 1, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 13, shelfId: 1, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 14, shelfId: 1, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 15, shelfId: 1, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 16, shelfId: 1, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 17, shelfId: 4, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 18, shelfId: 1, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 19, shelfId: 1, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 20, shelfId: 1, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 21, shelfId: 2, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 22, shelfId: 2, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 23, shelfId: 2, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 24, shelfId: 4, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 25, shelfId: 2, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 26, shelfId: 2, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 27, shelfId: 2, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 28, shelfId: 2, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 29, shelfId: 2, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 30, shelfId: 4, createdAt: new Date(), updatedAt: new Date() }
      ], {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Book_Shelves', null, {});
  }
};
