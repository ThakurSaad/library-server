const {
  getAuthorsService,
  getAuthorByIdService,
  deleteAuthorByIdService,
} = require("../service/author.service");

exports.getAuthors = async (req, res) => {
  try {
    const authors = await getAuthorsService();

    res.status(200).json({
      status: "Success",
      message: "Authors found",
      data: authors,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Authors not found",
      error: error.message,
    });
  }
};

exports.getAuthorById = async (req, res) => {
  try {
    const { id } = req.params;

    const author = await getAuthorByIdService(id);

    if (!author) {
      return res.status(404).json({
        status: "Fail",
        message: "Author not found for this id",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Author found",
      data: author,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Author not found",
      error: error.message,
    });
  }
};

exports.deleteAuthorById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteAuthorByIdService(id);

    if (!result?.deletedCount) {
      return res.status(404).json({
        status: "Fail",
        message: "Author not found for this id",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Author deleted",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Author not deleted",
      error: error.message,
    });
  }
};
