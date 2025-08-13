const userModel = require("../models/userModel");
const transactionrModel = require("../models/transactionModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Razorpay = require("razorpay");

if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  console.error(
    "FATAL ERROR: Razorpay keys are not defined. Please check your .env file and ensure it is being loaded correctly with `require('dotenv').config()` in your main server file."
  );
  throw new Error("Razorpay keys are missing from environment variables.");
}

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "Details Missing",
      });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
      creditBalance: 5,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ success: true, token, user: { name: user.name } });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token, user: { name: user.name } });
    } else {
      res.json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message,
    });
  }
};

const userCredit = async (req, res) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.json({ success: false, message: "User ID missing" });
    }

    const user = await userModel.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      credits: user.creditBalance,
      user: { name: user.name },
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message,
    });
  }
};

const paymentRazorpay = async (req, res) => {
  try {
    const userId = req.userId;
    const { planId } = req.body; // --- ENHANCED DEBUGGING LOGS ---

    console.log("Attempting Razorpay payment...");
    console.log("User ID:", userId);
    console.log("Plan ID:", planId);
    console.log("Razorpay Key ID:", process.env.RAZORPAY_KEY_ID);
    console.log(
      "Razorpay Key Secret:",
      process.env.RAZORPAY_KEY_SECRET
        ? "SECRET IS PRESENT"
        : "SECRET IS UNDEFINED"
    );
    if (!userId || !planId) {
      return res.json({ success: false, message: "Missing Details" });
    }

    const userData = await userModel.findById(userId);

    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    let credits, plan, amount, date;

    switch (planId) {
      case "Basic":
        plan = "Basic";
        credits = 100;
        amount = 10;
        break;
      case "Advanced":
        plan = "Advanced";
        credits = 500;
        amount = 50;
        break;
      case "Business":
        plan = "Business";
        credits = 5000;
        amount = 100;
        break;

      default:
        return res.json({ success: false, message: "Plan not found" });
    }
    date = Date.now();
    const transactionData = {
      userId,
      plan,
      amount,
      credits,
      date,
    };
    const newTransaction = await transactionrModel.create(transactionData);
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: newTransaction._id,
    };
    try {
      console.log("Creating Razorpay order with options:", options);
      const order = await razorpayInstance.orders.create(options);
      console.log("Razorpay order created successfully:", order);
      res.json({ success: true, order: { ...order, currency: "INR" } });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { registerUser, loginUser, userCredit, paymentRazorpay };
