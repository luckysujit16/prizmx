// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
  referralId: { type: String, default: "pzmx_369369" },
  registrationDate: { type: Date, default: Date.now },
  isEmailVerified: { type: Boolean, default: false },
  isMobileVerified: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
