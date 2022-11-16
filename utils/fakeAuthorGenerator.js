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

module.exports = fakeAuthorGenerator;
