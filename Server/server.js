const express = require("express");
var cors = require("cors");
const app = express();
const connectDB = require("./config/db");
require("dotenv").config();
app.use(cors());

// connecting to database
connectDB();

// creating server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server running at " + PORT);
});
