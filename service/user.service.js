const User = require("../model/User");

exports.signupService = async (userInfo) => {
  return await User.create(userInfo);
};

exports.findUserByEmailService = async (userEmail) => {
  return await User.findOne({ email: userEmail });
};
