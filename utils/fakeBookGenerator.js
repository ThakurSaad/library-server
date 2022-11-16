const { faker } = require("@faker-js/faker/locale/de");

// number parameter from app.js where the function is called
async function fakeBookGenerator(number) {
  try {
    let books = [];

    for (let i = 1; i <= number; i++) {
      const title = faker.lorem.words(3);
      const likes = faker.random.numeric(1);
      const likedBy = [];
      const unlikedBy = [];
      const author = {
        _id: "",
        email: "",
      };

      books.push({
        title,
        likes,
        likedBy,
        unlikedBy,
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
