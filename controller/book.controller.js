const {
  createBooksService,
  getBooksService,
  getBookByIdService,
  deleteBookByIdService,
  updateBookByIdService,
  likeBookByIdService,
  unlikeBookByIdService,
} = require("../service/book.service");

exports.createBooks = async (req, res) => {
  try {
    const result = await createBooksService(req.body);

    res.status(200).json({
      status: "Success",
      message: "Books created",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Books not created",
      error: error.message,
    });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const queries = {};

    // sort by anything (e.g likes)
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join("");
      queries.sortBy = sortBy;
    }

    // pagination
    if (req.query.page) {
      const { page = 1, limit = 5 } = req.query;
      const skip = (page - 1) * parseInt(limit);

      queries.skip = skip;
      queries.limit = parseInt(limit);
    }

    const books = await getBooksService(queries);

    res.status(200).json({
      status: "Success",
      message: "Books found",
      data: books,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Books not found",
      error: error.message,
    });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await getBookByIdService(id);

    if (!book) {
      return res.status(404).json({
        status: "Fail",
        message: "Book not found for this id",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Book found",
      data: book,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Book not found",
      error: error.message,
    });
  }
};

exports.updateBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await updateBookByIdService(id, req.body);

    if (!result?.matchedCount) {
      return res.status(404).json({
        status: "Fail",
        message: "Book not found for this id",
      });
    }

    if (!result?.modifiedCount) {
      return res.status(200).json({
        status: "Fail",
        message: "Already updated",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Book updated",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Book not updated",
      error: error.message,
    });
  }
};

exports.deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteBookByIdService(id);

    if (!result?.deletedCount) {
      return res.status(404).json({
        status: "Fail",
        message: "Book not found for this id",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Book deleted",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Book not deleted",
      error: error.message,
    });
  }
};

exports.likeBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await likeBookByIdService(id, req?.user);

    if (!result) {
      return res.status(400).json({
        status: "Fail",
        message: "Book already liked",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Book liked",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Book not liked",
      error: error.message,
    });
  }
};

exports.unlikeBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await unlikeBookByIdService(id, req?.user);

    if (!result) {
      return res.status(400).json({
        status: "Fail",
        message: "Book already unliked",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Book unlike done",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Book can not be unlike",
      error: error.message,
    });
  }
};
