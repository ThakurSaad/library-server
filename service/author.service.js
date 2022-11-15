const Author = require("../model/Author");

exports.getAuthorsService = async () => {
  const authors = await Author.find({});
  const total = await Author.countDocuments();
  return { total, authors };
};

exports.getAuthorByIdService = async (authorId) => {
  const author = await Author.findOne({ _id: authorId });
  return author;
};
