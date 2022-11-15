const {
  createBooksService,
  getBooksService,
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
    const Books = await getBooksService();

    res.status(200).json({
      status: "Success",
      message: "Books found",
      data: Books,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Books not found",
      error: error.message,
    });
  }
};
