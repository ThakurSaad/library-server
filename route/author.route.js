const express = require("express");
const router = express.Router();
const authorController = require("../controller/author.controller");

router.get("/", authorController.getAuthors);

router
  .route("/:id")
  .get(authorController.getAuthorById)
  .delete(authorController.deleteAuthorById)
  .patch(authorController.updateAuthorById);

module.exports = router;
