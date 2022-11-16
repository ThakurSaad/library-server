const express = require("express");
const router = express.Router();
const authorController = require("../controller/author.controller");
const { verifyToken } = require("../middleware/verifyToken");

router
  .route("/")
  .post(authorController.createAuthors)
  .get(verifyToken, authorController.getAuthors);

router.get("/me", verifyToken, authorController.getAuthorDetails);

router
  .route("/:id")
  .get(verifyToken, authorController.getAuthorById)
  .delete(authorController.deleteAuthorById)
  .patch(authorController.updateAuthorById);

module.exports = router;
