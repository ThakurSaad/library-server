const Book = require("../model/Book");

exports.createBooksService = async (data) => {
  return await Book.create(data);
};

exports.getBooksService = async () => {
  const books = await Book.find({});
  const total = await Book.countDocuments();
  return { total, books };
};
