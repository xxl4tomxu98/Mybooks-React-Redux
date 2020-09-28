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
    Book.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return Book;
};
