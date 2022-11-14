const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

const authorRoute = require("./route/author.route");

app.use("/api/v1/authors", authorRoute);

app.get("/", (req, res) => {
  res.send("Library door is open");
});

app.get("*", (req, res) => {
  res.send("You are lost");
});

module.exports = app;
