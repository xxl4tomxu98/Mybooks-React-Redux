'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shelf = sequelize.define('Shelf', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Shelf.associate = function(models) {
    const columnMapping = {
      through: 'Book_Shelf',
      otherKey: 'bookId',
      foreignKey: 'shelfId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    };
    Shelf.belongsToMany(models.Book, columnMapping);
    Shelf.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Shelf;
};
