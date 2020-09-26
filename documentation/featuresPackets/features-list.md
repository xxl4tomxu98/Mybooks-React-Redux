# User Stories

1. As a normal user, I want to be able to quickly find books to read.
    - Do we want to have a search bar at the top?

2. As a typical user, I want to find new books in a specific genre.
3. As a typical user, I want to categorize my books on my bookshelf.
4. As a typical user, I want to be able to see all reviews on a book I am interested in.
5. I want to write and see reviews on the same book page.
6. I want to keep track of my status for books (reading, finished, haven't started).
7. I want to follow authors.
8. I want books suggested to me based on my prior reading history or preferences list.
    - Do we want to limit number of prefences at sign up? (max 3)

<br>
<br>
<br>

# Features - MVP


> ## Landing page
### (not logged in)
- sign up fields
- log in
- information about the website

> ## intermediate create account function page?
- book genre preferences
- books you've read already

> ## Home page - My Books list Page
### (logged in)
- search field (api fetch to google books)
- list of created bookshelves(named whatever they please) with books
- image of book(api fetch)

> ## Book page:
- book reviews
- ability to add reviews

> ## search page:
- list of books that meet search criteria
- has books information
- book images
- book reviews

<br>
<br>
<br>

# Additional features
> ## nav bar
- a more robust search
> ## Landing page
- adding search functionality for people without accounts/not logged in.
  - creating a way for them to create an account when they try to add a book to a shelf
  - random quotes
  - description of site
  - potentially "infinite" scrolling

> ## My books page
- personal notes
- alphabetical side scroller for book collection
- review section

> ## search page
- add discover option *suggestions based on genre or previously read authors*

> ## profile page
- ability to edit personal information, genres

> ## individual book page
- ratings

<br>
<br>
<br>

# Table

![Table Model](../images/mybooks-schema.jpg)

<br>
<br>
<br>

# Pages & Routes

## nav bar for all pages
  - search field get request, post with selected text in search field as a redirect to search results page. limit search to title an author (for now)
  - user dropdown menu
  - name logo redirect to main page (your bookshelf)

## Landing Page
  - signin form generated with 'get', submit with 'post' email and password
  - registration form generated with 'get', submit with 'post' firstName, lastName, email, password, confirmPassword
  - Utilize Bcrypt for user authentication & authorization (storing password hash to database).

## intermediate registration page
  - button form generated with 'get', submited with 'post' with list of selected options

## Home Page
  - bookshelf list with links that represent shelves
  - shelf with pages that can be clicked to go through, stretch will be to change to carousel with dropdown
  - ability to jump to spots in list based on alphabetical
  - book notes a text field with ability to add more
  - book info table use API to fetch
  - get request for all books on shelf?
  - pages to load a limited number of books

## Profile page
  - get request from user table
  - post request for editing profile
  - redirect to intermediate genre selection form

## Book Page
  - get fetch for book info (genre title author reviews pages)
  - personalReview (might have to do separate since can't alter API)
  - post a review option
  - post option to add to bookshelf
  - get request on user table that includes shelf

## Search Page
  - post results from search rendered link list
  - limit to 10, possible stretch to make it more dynamic.
