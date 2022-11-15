const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const bookSchema = mongoose.Schema(
  {
    // mongoDB creates an Id by default. So to reduce the code I have not manually forced an Id

    title: {
      type: String,
      unique: true,
      required: [true, "Please provide book title"],
      trim: true,
    },

    likes: {
      type: Number,
      min: 0,
    },

    author: {
      _id: {
        type: ObjectId,
        ref: "Author",
      },
      email: String,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
