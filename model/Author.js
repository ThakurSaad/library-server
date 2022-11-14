const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const authorSchema = mongoose.Schema({
  // mongoDB creates an Id by default. So to reduce the code I have not manually forced an Id

  name: {
    type: String,
    required: [true, "Please provide author name"],
    lowercase: true,
    trim: true,
  },

  email: {
    type: String,
    required: [true, "Email address is required"],
    validate: [validator.isEmail, "Provide a valid Email"],
    trim: true,
  },

  phone_no: {
    type: String,
    required: [true, "Phone no is required"],
  },

  books: [
    {
      type: ObjectId,
      ref: "Book",
    },
  ],
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
