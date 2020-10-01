'use strict';
const { genres } = require('./genre');

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    author: {
      allowNull: false,
      type: DataTypes.STRING
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    publicationYear: {
      allowNull: false,
      type: DataTypes.STRING
    },
    genre: {
      allowNull: false,
      type: DataTypes.ENUM(genres),
      values: genres,
    },

    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {});
  Book.associate = function(models) {
    const columnMapping = {
      through: 'Book_Shelf',
      otherKey: 'shelfId',
      foreignKey: 'bookId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    };
    Book.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Book.hasMany(models.Review, {foreignKey: 'bookId', as: 'reviews'});
    Book.belongsToMany(models.Shelf, columnMapping);
  };
  return Book;
};
