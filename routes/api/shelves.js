const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { User, Book, Shelf, Book_Shelf } = require('../../db/models');
const { authenticated } = require('./security-utils');

const router = express.Router();

// const title = check('title').notEmpty();
// const author = check('author').notEmpty();

// const publicationYear = check('publicationYear').notEmpty();
// const description = check('description').notEmpty();
// const genre = check('genre').notEmpty().isIn(genres);
// const review = check('review').notEmpty();

const errorFormatter = ({ msg, param }) => {
  return `${param}: ${msg}`;
};


const bookshelfNotFoundError = (id) => {
  const err = Error("Bookshelf not found");
  err.errors = [`Bookshelf with id of ${id} could not be found.`];
  err.title = "Bookshelf not found.";
  err.status = 404;
  return err;
};


const validateShelf = [
  check("newShelfName")
    .exists({ checkFalsy: true })
    .withMessage("Bookshelf can't be empty."),
  //  bookshelf name cannot be longer than 80 characters:
  check("newShelfName")
    .isLength({ max: 80 })
    .withMessage("Bookshelf name can't be longer than 80 characters."),
];



router.get("/",
  authenticated,
  asyncHandler(async (req, res) => {
    try{
      const shelves = await Shelf.findAll({
        where: {
          userId: req.user.id
        },
        order: [["createdAt", "DESC"]],
      });
      if(shelves) {
        res.json(shelves);
      } else {
        res.json('no shelves')
      }
    } catch(e){
      console.log(e)
    }
}));


router.get("/:id",
  asyncHandler(async (req, res, next) => {
    const shelf = await Shelf.findOne({
      where: {
        id: req.params.id,
      },
      include: Book
    });
    if (shelf) {
      res.json(shelf);
    } else {
      next(bookshelfNotFoundError(req.params.id));
    }
  })
);


router.post("/",
  authenticated,
  validateShelf,
  asyncHandler(async (req, res) => {
    const bookshelf = await Shelf.create({ name: req.body.name, userId: req.user.id});
    const id = bookshelf.id;
    return res.json({ id });
  })
);


router.delete(
  "/:id",
  authenticated,
  asyncHandler(async (req, res, next) => {
    const bookshelf = await Shelf.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (req.user.id !== bookshelf.userId) {
      const err = new Error("Unauthorized");
      err .status = 401;
      err.message = "You are not authorized to delete this bookshelf.";
      err.title = "Unauthorized";
      throw err;
    }
    if (bookshelf) {
      const connections = await Book_Shelf.findAll({
        where: {
          shelfId: req.params.id
        }
      });
      for (let connection of connections) {
        await connection.destroy()
      };
      await bookshelf.destroy();
      res.json({ message: `Deleted bookshelf with id of ${req.params.id}.` });
    } else {
      next(bookshelfNotFoundError(req.params.id));
    }
  })
);



router.delete("/:shelfId/books/:bookId",
  asyncHandler(async(req, res) => {
    const bookId = req.params.bookId;
    const shelfId = req.params.shelfId;

    const book = await Book.findByPk(bookId);
    const shelf = await Shelf.findByPk(shelfId, {
      include: Book
    });

    // const updatedBooks = await Book.findAll({
    //   where: {
    //     [Op.not]: {
    //       id: bookId
    //     }
    //   },
    //   include: { model: Shelf,
    //     where: {
    //       id: shelfId,
    //     }
    //   },
    // });

    const bookOnShelf = await Book_Shelf.findOne({
      where: {
        bookId: bookId,
        shelfId: shelfId
      }
    });

    await bookOnShelf.destroy();

    res.json({ message: `Removed ${book.title} by ${book.author} from your bookshelf, ${bookshelf.name}` });
  }));


router.post("/:shelfId/books/bookId",
  asyncHandler(async (req, res, next) => {
  const bookId = req.params.bookId;
  const shelfId = req.params.shelfId; ;
  const bookshelf = await Shelf.findByPk(shelfId);
  const book = await Book.findByPk(bookId)
  if (bookshelf) {
    await bookshelf.addBook(book);
    res.json(shelfId, bookId);
  } else {
    next(bookshelfNotFoundError(req.params.shelfId));
  };
}));

module.exports = router;
