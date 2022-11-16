const Book = require("../model/Book");
const Author = require("../model/Author");

exports.createBooksService = async (data) => {
  const book = await Book.create(data);

  const { _id: bookId, author } = book;
  const { _id: authorId } = author;
  const newBookId = bookId.toString();
  const newAuthorId = authorId.toString();

  await Author.updateOne(
    { _id: newAuthorId },
    { $push: { books: newBookId }, $inc: { number_of_books: 1 } }
  );

  return book;
};

exports.getBooksService = async (queries) => {
  const books = await Book.find({})
    .skip(queries.skip)
    .limit(queries.limit)
    .sort(queries.sortBy);
  const total = await Book.countDocuments();
  const page = Math.ceil(total / queries.limit);
  return { total, page, books };
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

exports.likeBookByIdService = async (bookId, userInfo) => {
  const { email } = userInfo;

  const book = await this.getBookByIdService(bookId);

  if (book) {
    const { likedBy } = book;
    const foundUserEmail = likedBy.find((userEmail) => userEmail == email);

    if (foundUserEmail) {
      return null;
    } else {
      const result = await Book.updateOne(
        { _id: bookId },
        { $inc: { likes: 1 }, $push: { likedBy: email } },
        { runValidators: true }
      );
      return result;
    }
  }
};

exports.unlikeBookByIdService = async (bookId, userInfo) => {
  const { email } = userInfo;

  const book = await this.getBookByIdService(bookId);

  if (book) {
    const { unlikedBy } = book;
    const foundUserEmail = unlikedBy.find((userEmail) => userEmail == email);

    if (foundUserEmail) {
      return null;
    } else {
      const result = await Book.updateOne(
        { _id: bookId },
        { $inc: { likes: -1 }, $push: { unlikedBy: email } },
        { runValidators: true }
      );
      return result;
    }
  }
};
