const express = require("express");
const path = require("path");

// Create Express App
const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

// Listen for Requests
