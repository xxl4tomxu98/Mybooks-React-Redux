# BOOK FEATURE PACKET

### User Story
---

As an authorized user, after checking token,
I want to be able to see information about my books
In order to read user reviews

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
- migration to add reviews_id
### Endpoints.
---

/books/:id



### Sketches?
![Model](../images/mybooks-schema.jpg)
---
