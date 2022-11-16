const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = require("./app");

// const atlasUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zikryes.mongodb.net/Library?retryWrites=true&w=majority`;

mongoose
  .connect(
    "mongodb+srv://libraryUser:ehRz9D9Up9Ay1Gn5@cluster0.zikryes.mongodb.net/Library?retryWrites=true&w=majority"
  )
  .then(() => {
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
      const name = "";
      const email = "";
      const phone_no = faker.phone.number("+91##########");
      const number_of_books = 0;
      const books = [];
      const author_details = {
        _id: "",
      };

      authors.push({
        name,
        email,
        phone_no,
        number_of_books,
        books,
        author_details,
      });
    }
    authors = JSON.stringify(authors);

    console.log(authors);
  } catch (error) {
    console.log(error);
  }
}
// fakeAuthorGenerator(3);
