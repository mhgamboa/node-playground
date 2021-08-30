const express = require("express");
const path = require("path");

// Create Express App
const app = express();

// Register View Engine
app.set("view engine", "ejs");

// Listen for requests on port 3000
app.listen(3000);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

// Redirecot for /about-me
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
