// routes/verify.js
const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/verify", async (req, res) => {
  const { email, verificationCode } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Here you should compare the verificationCode with the code you sent
    // For simplicity, assuming it's always correct in this example
    user.isEmailVerified = true;
    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
