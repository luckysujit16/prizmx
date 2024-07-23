const express = require("express");
const path = require("path");

const app = express();

// Init Middleware
app.use(express.json());

app.get("/*", (req, res) => {
  res.send(
    "API Running, Please Use Valid API Endpoint as per API Documentation and Request Method (GET, POST, PUT, DELETE, PATCH) to get valid response."
  );
  res.status(200);
});

app.post("/*", (req, res) => {
  res.send(
    "API Running, Please Use Valid API Endpoint as per API Documentation and Request Method (GET, POST, PUT, DELETE, PATCH)to get valid response."
  );
  res.status(200);
});

app.put("/*", (req, res) => {
  res.send(
    "API Running, Please Use Valid API Endpoint as per API Documentation and Request Method (GET, POST, PUT, DELETE, PATCH)to get valid response."
  );
  res.status(200);
});

app.patch("/*", (req, res) => {
  res.send(
    "API Running, Please Use Valid API Endpoint as per API Documentation and Request Methods (GET, POST, PUT, DELETE, PATCH)to get valid response."
  );
  res.status(200);
});

app.delete("/*", (req, res) => {
  res.send(
    "API Running, Please Use Valid API Endpoint as per API Documentation and Request Method (GET, POST, PUT, DELETE, PATCH)to get valid response."
  );
  res.status(200);
});

app.head("/*", (req, res) => {
  res.send(
    "API Running, Please Use Valid API Endpoint as per API Documentation and Request Method (GET, POST, PUT, DELETE, PATCH)to get valid response."
  );
  res.status(200);
});

// Auth Routes
app.use("/api/auth", require("./Backend/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
