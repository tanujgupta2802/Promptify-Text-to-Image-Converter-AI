const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}promptify`);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

module.exports = connectDB;
