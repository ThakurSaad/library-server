const { faker } = require("@faker-js/faker/locale/de");

// number parameter comes from app.js where the function is called
async function fakeUserGenerator(number) {
  try {
    let users = [];

    for (let i = 1; i <= number; i++) {
      const email = faker.internet.email();
      const password = faker.internet.password();
      const name = faker.name.fullName();
      const location = faker.address.state();
      const liked_books = [];

      users.push({
        email,
        password,
        name,
        location,
        liked_books,
      });
    }
    users = JSON.stringify(users);

    // console.log(users);
  } catch (error) {
    console.log(error);
  }
}

module.exports = fakeUserGenerator;
