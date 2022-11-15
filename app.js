const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

const authorRoute = require("./route/author.route");
const fakeUserGenerator = require("./utils/fakeUserGenerator");

app.use("/api/v1/authors", authorRoute);

// data generation upon server start
fakeUserGenerator(3);

app.get("/", (req, res) => {
  res.send("Library door is open");
});

app.get("*", (req, res) => {
  res.send("You are lost");
});

module.exports = app;
