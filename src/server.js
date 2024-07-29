const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());

// Helper function to read JSON file
function readJsonFile(filePath) {
  try {
    const absolutePath = path.resolve(__dirname, filePath);
    const rawData = fs.readFileSync(absolutePath, "utf-8");
    return JSON.parse(rawData);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return { data: [] }; // Return an object with an empty array if there's an error
  }
}

// Get dashboard data
const dashboardData = readJsonFile("./dashboardData.json").dashboardData;
const orderData = readJsonFile("./dashboardData.json").buyOrders;
const currencyData = readJsonFile(
  "./dashboardData.json"
).countrywisecurrencydata;
// Init Middleware
app.use(express.json());

//Prizmx Dashboard Data Route
app.get("/dashboardata", (req, res) => {
  if (dashboardData) {
    res.status(200).json(dashboardData);
  } else {
    res.status(404).json({ dashboardData: [] });
  }
});

//Orders Data
app.get("/orderdata", (req, res) => {
  if (orderData) {
    res.status(200).json(orderData);
  } else {
    res.status(404).json({ orderData: [] });
  }
});

//Currency Data
app.get("/currencydata", (req, res) => {
  if (currencyData) {
    res.status(200).json(currencyData);
  } else {
    res.status(404).json({ currencyData: [] });
  }
});

// Auth Routes
app.use("/api/auth", require("./Backend/auth"));
app.use("/api/kyc", require("./Backend/kyc"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
