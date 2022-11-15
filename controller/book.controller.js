const {
  createBooksService,
  getBooksService,
  getBookByIdService,
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
    const books = await getBooksService();

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
