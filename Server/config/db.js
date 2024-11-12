const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoDB_URL).then(() => {
      console.log("MongoDB conncted Succesfully");
    });
  } catch (error) {
    console.log("MongoDB connction Failed ", +error.message);
  }
};
module.exports = connectDB;
