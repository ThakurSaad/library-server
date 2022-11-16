# Library Server

- [Live Server](https://library-server.vercel.app/) ☁️

I have tried to build the backend of a **Library** in this project 🙎 I used **MVC** to structure my code

### Interesting Experience

I struggled the most when designing the database 🙇

### Project Details / Api Documentation

- Base url `https://library-server.vercel.app/` + `/api/v1` = `{{VERCEL}}`
  - `api` is used to let the dev know its an api.
  - `v1` is used to let the dev know the version of the application.
- `req.body` is validated before through `User` `Book` `Author` model.
- Upon server starting [fake data](https://github.com/ThakurSaad/library-server/tree/main/utils) is generated about user, book and author.

### Book routes

All routes are authenticated

- `POST/{{VERCEL}}/books`
  - can add books.
  - do not add array of books! must add books one by one.
  - one book added and it becomes `ref` to the author who published the book.
- `GET/{{VERCEL}}/books?page=1&sort=-likes&limit=3`
  - returns all the books in the database
  - paginated
  - can be sorted by most likes or least likes
- `GET/{{VERCEL}}/books/:id`
  - get details book info by id
- `DELETE/{{VERCEL}}/books/:id`
  - delete book by id
- `PATCH/{{VERCEL}}/books/:id`
  - update book by id
- `PUT/{{VERCEL}}/books/like/:id`
  - like book by id
  - logged in user can like the book
  - increases the likes of the book by 1
  - a user can like a book only once
  - a user can not like a book more than once
- `PUT/{{VERCEL}}/books/unlike/:id`
  - unlike book by id
  - logged in user can unlike the book
  - a user can unlike a book only once
  - a user can not unlike a book more than once

### Author routes

- `POST/{{VERCEL}}/authors`
  - can add authors.
  - can add array of authors or one by one.
- `GET/{{VERCEL}}/authors` **Authenticated**
  - returns all the authors in the database
  - with number of books they published
- `GET/{{VERCEL}}/authors/:id` **Authenticated**
  - get details of the author by id
  - list of books published by the author
- `GET/{{VERCEL}}/authors/me` **Authenticated**
  - get details logged in author
- `DELETE/{{VERCEL}}/authors/:id`
  - delete author by id
- `PATCH/{{VERCEL}}/authors/:id`
  - update author by id

### User routes

- `POST/{{VERCEL}}/user/signup`
  - saves user on the database
- `POST/{{VERCEL}}/user/login`
  - user log in
  - generates accessToken (JWT) upon login

### Other info

- some [mock data](https://github.com/ThakurSaad/library-server/tree/main/data) are given about user, books, authors

### Installed Packages

- cors
- express
- node
- mongoose
- dotenv
- JWT
- validator
- colors
- nodemon
- faker
