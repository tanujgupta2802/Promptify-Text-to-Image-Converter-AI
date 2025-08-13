const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Payment = require("../models/paymentModel"); // if you store payments
const Image = require("../models/imageModel"); // if you store generated images
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");

router.get("/stats", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalImages = await Image.countDocuments();
    const totalRevenue = await Payment.aggregate([
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    res.json({
      totalUsers,
      totalImages,
      totalRevenue: totalRevenue[0]?.total || 0,
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching stats" });
  }
});

router.get("/daily-signups", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const dailySignups = await User.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);
    res.json(dailySignups);
  } catch (error) {
    res.status(500).json({ error: "Error fetching daily signups" });
  }
});

module.exports = router;
