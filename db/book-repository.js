
const { Book, Review } = require('./models');


async function create(details, owner) {
  details.userId = owner.id;
  const book = await Book.create(details);
  return book.id;
}

async function saveReview(body, owner, bookId) {
  const review = {description: body.review, userId: owner.id, bookId};
  const savedReview = await Review.create(review);
  return savedReview.id;
}

async function list() {
  return await Book.findAll({
    attributes: [ 'title', 'author', 'publicationYear', 'id' ],
  });
}

async function one(id) {
  const book = await Book.findByPk(id, {
    include: [ 'user', 'reviews' ]
  });
  return {
    title: book.title,
    author: book.author,
    description: book.description,
    publicationYear: book.publicationYear,
    genre: book.genre,
    owner: {
      id: book.user.id,
      username: book.user.username,
    },
    reviews: book.reviews.map(review => {
      return {
        description: review.description,
        userId: review.userId,
        bookId: review.bookId,
      };
    }),
  };
}



module.exports = {
  create,
  list,
  one,
  saveReview,
};
