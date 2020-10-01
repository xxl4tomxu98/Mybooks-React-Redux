'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'userId', as: 'userReview' });
    Review.belongsTo(models.Book, {foreignKey: 'bookId', as: 'bookReview' });
  };
  return Review;
};
