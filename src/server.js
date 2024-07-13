// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// DB Config
const db = "mongodb://0.0.0.0:27017/prizmx";

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
const registerRoute = require("./Frontend/routes/register");
app.use("/api", registerRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
