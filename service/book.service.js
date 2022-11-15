const Book = require("../model/Book");

exports.createBooksService = async (data) => {
  return await Book.create(data);
};

exports.getBooksService = async () => {
  const books = await Book.find({});
  const total = await Book.countDocuments();
  return { total, books };
};

exports.getBookByIdService = async (bookId) => {
  const book = await Book.findOne({ _id: bookId });
  return book;
};

exports.updateBookByIdService = async (bookId, data) => {
  const result = await Book.updateOne({ _id: bookId }, data);
  return result;
};

exports.deleteBookByIdService = async (bookId) => {
  const result = await Book.deleteOne({ _id: bookId });
  return result;
};

exports.likeBookByIdService = async (bookId) => {
  const result = await Book.updateOne(
    { _id: bookId },
    { $inc: { likes: 1 } },
    { runValidators: true }
  );
  return result;
};

exports.unlikeBookByIdService = async (bookId) => {
  const result = await Book.updateOne(
    { _id: bookId },
    { $inc: { likes: -1 } },
    { runValidators: true }
  );
  return result;
};
