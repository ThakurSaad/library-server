const Author = require("../model/Author");

exports.getAuthorsService = async () => {
  const authors = await Author.find({});
  const total = await Author.countDocuments();
  return { authors, total };
};
