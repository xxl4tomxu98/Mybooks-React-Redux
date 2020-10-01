'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book_Shelf = sequelize.define('Book_Shelf', {
    bookId: DataTypes.INTEGER,
    shelfId: DataTypes.INTEGER
  }, {});
  Book_Shelf.associate = function(models) {

  };
  return Book_Shelf;
};
