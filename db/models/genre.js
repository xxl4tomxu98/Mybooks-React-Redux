'use strict';
const genres = [
  'Biography',
  'Children',
  'Fantasy',
  'Historical',
  'Horror',
  'Humor',
  'Inspirational',
  'Literary',
  'Memoirs',
  'Motivational',
  'Mystery',
  'Philosophy',
  'Romance',
  'Sci-Fi',
  'Self-Help',
  'Travel',
  'Western',
  'Women',
  'Outdoors',
];

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('__poop__', {});
};

module.exports.genres = genres;
