console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
const { parse } = require("path");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    user = JSON.parse(data);
  }
});

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View Engine Setup
app.set("views", "views"); // Corrected typo here
app.set("view engine", "ejs");

// Routing
app.post("/create-item", (req, res) => {
  console.log(req.body);
});

app.get("/", function (req, res) {
  res.render("reja");
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, function () {
  console.log(
    `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
  );
});
