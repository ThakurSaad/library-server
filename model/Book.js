const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const bookSchema = mongoose.Schema({
  // mongoDB creates an Id by default. So to reduce the code I have not manually forced an Id

  title: {
    type: String,
    required: [true, "Please provide book title"],
    lowercase: true,
    trim: true,
  },

  likes: {
    type: Number,
    min: 0,
  },

  author: {
    type: ObjectId,
    ref: "Author",
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
