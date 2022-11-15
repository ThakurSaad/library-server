const { faker } = require("@faker-js/faker/locale/de");

async function fakeUserGenerator(number) {
  try {
    let users = [];

    for (let i = 1; i <= number; i++) {
      const email = faker.internet.email();
      const password = faker.internet.password();
      const name = faker.name.fullName();
      const location = faker.address.state();

      users.push({
        id: i,
        email,
        password,
        name,
        location,
      });
    }
    users = JSON.stringify(users);

    // console.log(users);
  } catch (error) {
    console.log(error);
  }
}

module.exports = fakeUserGenerator;
