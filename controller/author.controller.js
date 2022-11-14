exports.getAuthors = async (req, res) => {
  try {
    res.status(200).json({
      status: "Success",
      message: "Authors found",
      //   data: authors,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Authors not found",
      error: error.message,
    });
  }
};
