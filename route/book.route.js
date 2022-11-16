const express = require("express");
const router = express.Router();
const bookController = require("../controller/book.controller");
const { verifyToken } = require("../middleware/verifyToken");

router
  .route("/")
  .post(bookController.createBooks)
  .get(verifyToken, bookController.getBooks);

router.put("/like/:id", verifyToken, bookController.likeBookById);

router.put("/unlike/:id", verifyToken, bookController.unlikeBookById);

router
  .route("/:id")
  .get(bookController.getBookById)
  .delete(bookController.deleteBookById)
  .patch(bookController.updateBookById);

module.exports = router;
