# Genres FEATURE PACKET

### User Story
---
As a registering user,
I want to be able to select my favorite genres and pick
books with specific genres, So that I can get relevant information in searches.

### Models
---
> dependent on
- User
  - username
  - email
  - hashedPassword
  - tokenId

- Book
  - Author
  - Title
  - Description
  - publicationYear

> to be built

- Genre
  - name

- join table User_Genre
  - user_id
  - genre_id

- join table Book_Genre
  - book_id
  - genre_id

### Endpoints
---

/genres

redirect to /user


### Sketches?
![Model](../images/mybooks-schema.jpg)
---
