const express = require("express");
const app = express();
const path = require("path");

app.get("/index", (req, res) => {
  res.setHeader("content-type", "text/html");
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/", (req, res) => {
  res.redirect(path.join("/index"));
});
app.get("/about", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "about.html"));
});
app.get("/contact-me", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "contact-me.html"));
});
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "404.html"));
});

app.listen(8000, () => console.log("server running..."));
