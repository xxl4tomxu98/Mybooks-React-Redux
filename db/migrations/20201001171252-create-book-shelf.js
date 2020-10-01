'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Book_Shelves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Books'}
      },
      shelfId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Shelves'}
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Book_Shelves');
  }
};
