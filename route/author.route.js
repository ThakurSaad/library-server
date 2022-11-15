const express = require("express");
const router = express.Router();
const authorController = require("../controller/author.controller");

router.get("/", authorController.getAuthors);

router.get("/:id", authorController.getAuthorById);

module.exports = router;
