const User = require("../model/User");

exports.signupService = async (userInfo) => {
  return await User.create(userInfo);
};
