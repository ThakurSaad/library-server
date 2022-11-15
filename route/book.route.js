const express = require("express");
const router = express.Router();
const bookController = require("../controller/book.controller");

router.route("/").post(bookController.createBooks).get(bookController.getBooks);

router.put("/like/:id", bookController.likeBookById);

router.put("/unlike/:id", bookController.unlikeBookById);

router
  .route("/:id")
  .get(bookController.getBookById)
  .delete(bookController.deleteBookById)
  .patch(bookController.updateBookById);

module.exports = router;
