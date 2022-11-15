const { signupService } = require("../service/user.service");

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
