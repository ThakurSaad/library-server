const Book = require("../model/Book");

exports.createBooksService = async (data) => {
  return await Book.create(data);
};
