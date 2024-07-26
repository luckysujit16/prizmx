const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());

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

const dataArray = getDataFromFile().dashboardData;
console.log("Dashboard Data read from file:", dataArray);

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

const msg =
  "API Running, Please Use Valid API Endpoint as per API Documentation and Request Method (GET, POST, PUT, DELETE, PATCH) to get valid response.";

app.get("/*", (req, res) => {
  res.send(msg);
  res.status(200);
});

app.post("/*", (req, res) => {
  res.send(msg);
  res.status(200);
});

app.put("/*", (req, res) => {
  res.send(msg);
  res.status(200);
});

app.patch("/*", (req, res) => {
  res.send(msg);
  res.status(200);
});

app.delete("/*", (req, res) => {
  res.send(msg);
  res.status(200);
});

app.head("/*", (req, res) => {
  res.send(msg);
  res.status(200);
});

// Auth Routes
app.use("/api/auth", require("./Backend/auth"));
app.use("/api/kyc", require("./Backend/kyc"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
