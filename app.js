const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

const authorRoute = require("./route/author.route");
const bookRoute = require("./route/book.route");
const userRoute = require("./route/user.route");
const fakeUserGenerator = require("./utils/fakeUserGenerator");
const fakeBookGenerator = require("./utils/fakeBookGenerator");

app.use("/api/v1/authors", authorRoute);
app.use("/api/v1/books", bookRoute);
app.use("/api/v1/user", userRoute);

// data generation upon server start
fakeUserGenerator(3);
fakeBookGenerator(10);

app.get("/", (req, res) => {
  res.send("Library door is open");
});

app.get("*", (req, res) => {
  res.send("You are lost");
});

module.exports = app;
