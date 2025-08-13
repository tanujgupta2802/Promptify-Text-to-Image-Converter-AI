const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.verifyToken = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};

exports.verifyAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ error: "Access denied, admin only" });
  }
  next();
};
