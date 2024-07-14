// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const db = "mongodb://0.0.0.0:27017/prizmx";

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

const registerRoute = require("./Frontend/routes/register");
const verifyRoute = require("./Frontend/routes/verify");
app.use("/api", registerRoute);
app.use("/api", verifyRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
