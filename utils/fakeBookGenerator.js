const { faker } = require("@faker-js/faker/locale/de");

// number parameter from app.js where the function is called
async function fakeBookGenerator(number) {
  try {
    let books = [];

    for (let i = 1; i <= number; i++) {
      const title = faker.lorem.words(3);
      const likes = 0;
      const author = {
        _id: "",
        email: "",
      };

      books.push({
        title,
        likes,
        author,
      });
    }
    books = JSON.stringify(books);

    // console.log(books);
  } catch (error) {
    console.log(error);
  }
}

module.exports = fakeBookGenerator;
