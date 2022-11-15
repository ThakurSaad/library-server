const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = require("./app");

mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log(`Database is connected to library`.magenta);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is reading books at library ${port}`.america);
});

// ------------------------------
const { faker } = require("@faker-js/faker/locale/de");

// number parameter from app.js where the function is called
async function fakeAuthorGenerator(number) {
  try {
    let authors = [];

    for (let i = 1; i <= number; i++) {
      const name = faker.name.fullName();
      const email = faker.internet.email();
      const phone_no = faker.phone.number("+91##########");
      const number_of_books = 0;
      const books = [];

      authors.push({
        name,
        email,
        phone_no,
        number_of_books,
        books,
      });
    }
    authors = JSON.stringify(authors);

    console.log(authors);
  } catch (error) {
    console.log(error);
  }
}
// fakeAuthorGenerator(5);
