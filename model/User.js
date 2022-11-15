const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email address is required"],
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    name: {
      type: String,
      required: [true, "Please provide a first name"],
      trim: true,
    },

    location: {
      type: String,
      required: [true, "Please provide your location"],
      lowercase: true,
    },

    liked_books: [],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
