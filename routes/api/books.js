const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { genres } = require('../../db/models/genre');
const { authenticated } = require('./security-utils');
const BookRepository = require('../../db/book-repository');
const { Book, Shelf } = require('../../db/models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const router = express.Router();

const title = check('title').notEmpty();
const author = check('author').notEmpty();
//const imageUrl = check('imageUrl').notEmpty().isURL({ require_protocol: false, require_host: false });
const publicationYear = check('publicationYear').notEmpty();
const description = check('description').notEmpty();
const genre = check('genre').notEmpty().isIn(genres);
const review = check('review').notEmpty();

const errorFormatter = ({ msg, param }) => {
  return `${param}: ${msg}`;
};


//when user goes to /books with or without a search term logic
router.get('/:term', asyncHandler(async (req, res) => {
  //const { term } = req.query;
  let term = req.params.term;
  let books;
  if (term) {
    try {
      books = await Book.findAll({
        where: {
          [Op.or]: [
            { title: { [Op.iLike]: `%${term}%` } },
            { author: { [Op.iLike]: `%${term}%` } }
          ]
        },
        order: [['title', 'ASC']]
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    books = await Book.findAll({
      limit: 30,
      order: [['title', 'ASC']]
    })
  }
  //const searchTitle = `Search result for "${term}"`
  //res.render('searchpage', { books, searchTitle });
  res.json(books);
}))




router.get('/',
  authenticated,
  asyncHandler(async function(_req, res) {
    const books = await BookRepository.list();
    res.json(books);
}));



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





router.post('/:id/reviews', [
  ...authenticated, review
], asyncHandler(async function (req, res, next) {
    const errors = validationResult(req).formatWith(errorFormatter);
    if (!errors.isEmpty()) {
      return next({ status: 422, errors: errors.array() });
    }
    const reviewId = await BookRepository.saveReview( req.body, req.user, req.params.id );
    return res.json({ reviewId });
}));




router.get('/:id/reviews',
  authenticated,
  asyncHandler(async function(req, res) {
    const book = await BookRepository.one(req.params.id);
    const {reviews} = book;
    res.json(reviews);
}));


router.get("/:bookid/shelves",
  authenticated,
  asyncHandler(async (req, res) => {
    //get all the open shelves where the book is not currently on
    const bookId = req.params.bookid;
    //all shelves for the user that have the specified book
    const shelves = await Shelf.findAll({
      where: {
        userId : req.user.id,
      },
      include: {
        model: Book, where: {
          id: bookId
        }
      }
    });

    //all shelves in db for the user
    const allShelves = await Shelf.findAll({
      where: {
        userId: req.user.id
      }
    });
    //shelf id's for all user shelves with specific book
    let includedShelf = [];
    for (let shelf of shelves) {
      includedShelf.push(shelf.id);
    };
    //array of all shelves in db
    let allShelvesArray = [];
    for (let shelf of allShelves) {
      allShelvesArray.push(shelf);
    };

    //filters array for all shelves in db to have all
    //shelves that don't contain the book already
    const allShelvesWithoutBook = allShelvesArray.filter(function(shelf) {
      if (!includedShelf.includes(shelf.id)) {
        return shelf;
      }
    });
      //return as an obj containing the filtered array of objects
    res.json(allShelvesWithoutBook);
}));






module.exports = router;
