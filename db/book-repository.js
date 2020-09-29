
const { Book } = require('./models');


async function create(details, owner) {
  details.userId = owner.id;
  const book = await Book.create(details);
  return book.id;
}

async function list() {
  return await Book.findAll({
    attributes: [ 'title', 'author', 'publicationYear', 'id' ],
  });
}

async function one(id) {
  const book = await Book.findByPk(id, {
    include: [ 'user' ]
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
    // reviews: book.reviews.map(review => {
    //   return {
    //     description: review.description,
    //     user_id: review.user_id,
    //     book_id: review.book_id,
    //   };
    // }),
  };
}

module.exports = {
  create,
  list,
  one,
};
