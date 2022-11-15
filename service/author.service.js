const Author = require("../model/Author");

exports.createAuthorsService = async (data) => {
  return await Author.create(data);
};

exports.getAuthorsService = async () => {
  const authors = await Author.find({});
  const total = await Author.countDocuments();
  return { total, authors };
};

exports.getAuthorByIdService = async (authorId) => {
  const author = await Author.findOne({ _id: authorId }).populate("books");
  return author;
};

exports.updateAuthorByIdService = async (authorId, data) => {
  const result = await Author.updateOne({ _id: authorId }, data);
  return result;
};

exports.deleteAuthorByIdService = async (authorId) => {
  const result = await Author.deleteOne({ _id: authorId });
  return result;
};
