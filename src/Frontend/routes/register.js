// routes/register.js
const express = require("express");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const User = require("../models/User");
const nodemailer = require("nodemailer");

const router = express.Router();

// Send verification email (omitted for brevity)

const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service
  auth: {
    user: "admin@prizmxchange.com",
    pass: "spnh yxhl omsh jqqm",
  },
});

const sendVerificationEmail = (user, verificationCode) => {
  const mailOptions = {
    from: "admin@prizmxchange.com",
    to: user.email,
    subject: "Email Verification",
    text: `Your verification code is: ${verificationCode}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

// You can use a library like nodemailer to send emails

router.post("/register", async (req, res) => {
  const { name, email, mobile, password, confirmPassword, referralId } =
    req.body;

  // Validate input
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  // Generate referralId if not provided
  const generatedReferralId =
    referralId || `pzmx_${crypto.randomBytes(3).toString("hex")}`;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      mobile,
      password: hashedPassword,
      referralId: generatedReferralId,
    });

    await newUser.save();

    res.status(201).json({
      message:
        "Registration successful, please check your email for verification link",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async () =>{
  console.log("welcome to Mongoos server")
})

module.exports = router;
