// routes/register.js
const express = require("express");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const User = require("../models/User");
require("dotenv").config();

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendVerificationEmail = (user, verificationCode) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: "Email Verification",
    text: `Your verification code is: ${verificationCode}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

router.post("/register", async (req, res) => {
  const { name, email, mobile, password, confirmPassword, referralId } =
    req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const generatedReferralId =
    referralId || `pzmx_${crypto.randomBytes(3).toString("hex")}`;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      mobile,
      password: hashedPassword,
      referralId: generatedReferralId,
    });

    await newUser.save();

    const verificationCode = crypto.randomBytes(3).toString("hex");
    sendVerificationEmail(newUser, verificationCode);

    res.status(201).json({
      message:
        "Registration successful, please check your email for verification code",
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async () =>{
  console.log("welcome to Mongoos server")
})

module.exports = router;
