# Profile FEATURE PACKET

### User Story
---

as a registerd user, I want to see and add and delete
my genre information so that others can see what I am interested in genres

### Models
---

>dependent on
- User
  - username
  - email
  - hashedPassword
  - tokenId

- Genre
  - name

- join table Users_Genre
  - user_id
  - genre_id



### Endpoints
---

/profile



### Sketches?
![Model](../images/mybooks-schema.jpg)
---
