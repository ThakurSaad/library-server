const jwt = require("jsonwebtoken");

exports.generateToken = (userInfo) => {
  const payload = {
    userId: userInfo._id,
    email: userInfo.email,
  };

  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "7d",
  });

  return token;
};
