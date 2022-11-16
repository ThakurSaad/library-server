const {
  signupService,
  findUserByEmailService,
} = require("../service/user.service");
const { generateToken } = require("../utils/token");

exports.signup = async (req, res) => {
  try {
    const user = await signupService(req.body);

    res.status(200).json({
      status: "Success",
      message: "Successfully signed up",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Sing up not successful",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        status: "Fail",
        message: "Please provide credentials",
      });
    }

    const user = await findUserByEmailService(email);

    if (!user) {
      return res.status(401).json({
        status: "Fail",
        error: "No user found. Please create an account",
      });
    }

    const dbPassword = user?.password;
    const isPasswordValid = dbPassword == password;

    if (!isPasswordValid) {
      return res.status(403).json({
        status: "Fail",
        error: "Password is not correct",
      });
    }

    const token = generateToken(user);

    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      status: "Success",
      message: "Successfully logged in",
      data: {
        user: others,
        token,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Login not successful",
      error: error.message,
    });
  }
};
