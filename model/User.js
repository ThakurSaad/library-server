const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const userSchema = mongoose.Schema({
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

  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (value) {
        return value == this.password;
      },
      message: "Passwords don't match!",
    },
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
});

const User = mongoose.model("User", userSchema);

module.exports = User;
