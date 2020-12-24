# Solo React Project

This is the repository for the Solo React project.

[Live Link](https://mybooks-react-redux.herokuapp.com/)

![My-Books](client/public/webfonts/pic01.jpg)

<div align="center">
  <h2>Table of Contents</h2>
</div>

- [Technologies](#Technologies)
- [Model Schema](#Model-Schema)
- [Installation](#Installation)
- [Features](#Features)

## Technologies
- Back End
  - Express Node.js
- Front End
  - JavaScript React Redux Hooks

## Model Schema
![Model schema](documentation/images/mybooks-schema.jpg)

## Installation

1. Clone this repository
    ```bash
    git clone`https://github.com/xxl4tomxu98/Badreads.git`
    ```
2. Install dependencies (`npm install`)
    ```bash
    $ npm install
    ```
3. Create a **.env** file based on the example with proper settings for your
   development environment
    ```
    - CREATE USER mybooks_app WITH PASSWORD <<good password>>
    - CREATE DATABASE mybooks_db WITH OWNER mybooks_app
    ```
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file with CREATEDB privileges
    ```
    PORT=8080
    DB_USERNAME=mybooks_app
    DB_PASSWORD=<<your good password>>
    DB_DATABASE=mybooks_db
    DB_HOST=localhost
    JWT_SECRET=<<good secret code>>
    JWT_EXPIRES_IN=604800 (**about a week**)
    ```

5. Run
   * `npm run db:create`
      npx dotenv sequelize db:create
   * `npm run db:migrate`
      npx dotenv sequelize db:migrate
   * `npm run db:seed:all`
      npx dotenv sequelize db:seed:all
   * `npm start`

<br>

> browse to http://localhost:8080
---

## Features

### Add Books to Custom Bookshelf
***
Books can be added to bookshelves two ways: the dropdown from `/user/shelves` page where the bookshelves are located, or the books details page (`/books/:bookId`) after searching for a particular book. It's important to highlight that books can not appear multiple times on the same bookshelf. This is ensured by doing a query in the Back End `/api/books/:bookid/shelves` route for the bookshelf dropdown select field that filters out bookshelves the books already belongs to.

```js
// api/books.js file

//code grabs all shelves for user with book and all shelves in db then filters out all shelves by excluding
//the shelves found for the user with the book

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


```
Note:
  - All the shelves for the user are found first. Then the list of shelves with the book included. That list is then converted to id's which is easier to manage later opposed to the shelf object from the db. The array of id's are then used to filter out all of the bookshelves that include that id by cross referencing them with the original query of all the user bookshelves.



### Search Feature
***
The Back End `/api/books` route handles the search feature. The searchbar encompases the form:

```React.js
  //- searchbar.js file
    const [term, setTerm] = useState('');

    const history = useHistory();

    const updateTerm = (e) => {
        setTerm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchBooks(term);
    }

    const searchBooks = async (term) => {
        const res = await fetch(`/api/books/search/${term}`)
        if (res.ok) {
            const data = await res.json();
            history.push({
              pathname: '/search',
              state: data,
            });
            return data;
        }
        throw res;
    }
```

The API to route `/api/books`, which accepts a `GET` req with the search term as parameter in the end point, gets extracted. The search term is then use to query all book resources in the db that house the search term in it's title, case insensitive ofcourse.

```
/api/books.js
router.get('/search/:term', asyncHandler(async (req, res) => {
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
```

## Deploy to Heroku

1. Create a new project
2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
4. Run `$ heroku login`
5. Add heroku as a remote to this git repo `$ heroku git:remote -a mybooks-react-redux`
6. Push the project to heroku `$ git push heroku master`
7. Connect to the heroku shell and prepare your database

```bash
    $ heroku run bash
    $ sequelize-cli db:migrate
    $ sequelize-cli db:seed:all
```
(You can interact with your database this way as youd like, but beware that `db:drop` should not be run in the heroku environment)

8. Add a `REACT_APP_BASE_URL` config var.  This should be the full URL of your react app: i.e. "https://solo-react.herokuapp.com"

9. profit
