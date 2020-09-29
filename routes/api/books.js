const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { genres } = require('../../db/models/genre');

const { authenticated } = require('./security-utils');
const BookRepository = require('../../db/book-repository');

const router = express.Router();

const title = check('title').notEmpty();
const author = check('author').notEmpty();
//const imageUrl = check('imageUrl').notEmpty().isURL({ require_protocol: false, require_host: false });
const publicationYear = check('publicationYear').notEmpty();
const description = check('description').notEmpty();
const genre = check('genre').notEmpty().isIn(genres);

router.get('/',
  authenticated,
  asyncHandler(async function(_req, res) {
    const books = await BookRepository.list();
    res.json(books);
}));

const errorFormatter = ({ msg, param }) => {
  return `${param}: ${msg}`;
};

router.post('/', [
  ...authenticated,
  title,
  author,
  description,
  genre,
  publicationYear,
], asyncHandler(async function (req, res, next) {
  const errors = validationResult(req).formatWith(errorFormatter);
  if (!errors.isEmpty()) {
    return next({ status: 422, errors: errors.array() });
  }
  const id = await BookRepository.create(req.body, req.user);
  return res.json({ id });
}));

router.get('/genres', authenticated, asyncHandler(async function (_req, res) {
  res.json(genres);
}));

router.get('/:id', authenticated, asyncHandler(async function(req, res) {
  const book = await BookRepository.one(req.params.id);
  res.json(book);
}));

module.exports = router;
