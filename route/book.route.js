const express = require("express");
const router = express.Router();
const bookController = require("../controller/book.controller");
const { verifyToken } = require("../middleware/verifyToken");

router
  .route("/")
  .post(verifyToken, bookController.createBooks)
  .get(verifyToken, bookController.getBooks);

router.put("/like/:id", verifyToken, bookController.likeBookById);

router.put("/unlike/:id", verifyToken, bookController.unlikeBookById);

router
  .route("/:id")
  .get(verifyToken, bookController.getBookById)
  .delete(verifyToken, bookController.deleteBookById)
  .patch(verifyToken, bookController.updateBookById);

module.exports = router;
