const jwt = require("jsonwebtoken");
const { userInfo } = require("os");
const { promisify } = require("util");

exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")?.[1];

    if (!token) {
      return res.status(401).json({
        status: "Fail",
        error: "You are not logged in",
      });
    }

    const decoded = await promisify(jwt.verify)(
      token,
      process.env.TOKEN_SECRET
    );

    req.user = decoded;

    next();
  } catch (error) {
    res.status(403).json({
      status: "Fail",
      error: "Invalid Token",
      error: error.message,
    });
  }
};
