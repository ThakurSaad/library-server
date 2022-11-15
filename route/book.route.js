const express = require("express");
const router = express.Router();
const bookController = require("../controller/book.controller");

router.route("/").post(bookController.createBooks).get(bookController.getBooks);

// router
//   .route("/:id")
//   .get(bookController.getBookById)
//   .delete(bookController.deleteBookById)
//   .patch(bookController.updateBookById);

module.exports = router;
