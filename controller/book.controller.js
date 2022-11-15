const { createBooksService } = require("../service/book.service");

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
