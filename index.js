const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = require("./app");

// const atlasUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zikryes.mongodb.net/Library?retryWrites=true&w=majority`;

mongoose
  .connect(
    "mongodb+srv://libraryUser:ehRz9D9Up9Ay1Gn5@cluster0.zikryes.mongodb.net/Library?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`Database is connected to library`.magenta);
  });

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is reading books at library ${port}`.america);
});
