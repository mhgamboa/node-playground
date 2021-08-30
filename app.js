const express = require("express");
const path = require("path");

// Create Express App
const app = express();

// Register View Engine
app.set("view engine", "ejs");

// Listen for requests on port 3000
app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [
    { title: "You", snippet: "You are cool." },
    { title: "Me", snippet: "I am cool" },
    { title: "She", snippet: "She is cool" },
  ];
  res.render("index.ejs", { title: "Home Page", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Me" });
});

app.get("/blogs/create", (req, res) => {
  res.redirect("create.ejs", { title: "Create A New Blog Post" });
});

app.use((req, res) => {
  res.status(404).render("404.ejs", { title: "Page Not Found" });
});
