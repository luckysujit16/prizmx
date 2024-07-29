const express = require("express");
const cors = require("cors");
const fs = require("fs");
require('dotenv').config();

const app = express();
app.use(cors());

const dataArray = getDataFromFile().dashboardData;
const orderdataArray = getOrderDataFromFile().buyOrders;
console.log("Dashboard Data read from file:", orderdataArray);

// Add Dashboard Data from DashboardData.json
function getDataFromFile() {
  try {
    const rawData = fs.readFileSync("./src/dashboardData.json", "utf-8");
    const dashboardData = JSON.parse(rawData);
    // console.log(dashboardData);
    return dashboardData;
  } catch (error) {
    console.error("Error reading dashboardData.json:", error.message);
    return { dashboardData: [] }; // Return an object with an empty tasks array if there's an error
  }
}

// Dummy Buy Sell Order Data for Dashboard
function getOrderDataFromFile() {
  try {
    const rawData = fs.readFileSync("./src/dashboardData.json", "utf-8");
    const orderdataArray = JSON.parse(rawData);
    console.log(orderdataArray);
    return orderdataArray;
  } catch (error) {
    console.error("Error reading dashboardData.json:", error.message);
    return { orderdataArray: [] }; // Return an object with an empty tasks array if there's an error
  }
}

// Init Middleware
app.use(express.json());

app.get("/dashboardData", (req, res) => {
  if (dataArray) {
    res.json(dataArray);
    res.status(200);
  } else {
    res.json({ dashboardData: [] });
    res.status(404);
  }
});

//get Buy Order data

app.get("/orderdata", (req, res) => {
  if (orderdataArray) {
    res.json(orderdataArray);
    res.status(200);
  } else {
    res.json({ orderdataArray: [] });
    res.status(404);
  }
});

// Auth Routes
app.use("/api/auth", require("./Backend/auth"));
app.use("/api/kyc", require("./Backend/kyc"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
