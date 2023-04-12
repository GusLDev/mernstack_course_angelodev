//CONECTION -->
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => console.log("connected"))
  .catch((e) => console.log("error: " + e));