console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");
const { parse } = require("path");
const { send } = require("process");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    user = JSON.parse(data);
  }
});

//Mongodbni chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View Engine Setup
app.set("views", "views"); // Corrected typo here
app.set("view engine", "ejs");

// Routing
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  // console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    // console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});
app.post("/edit-item", (req, res) => {
  const data = req.body;

  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, result) {
      if (err) {
        res.json({ state: "failure" });
      } else {
        res.json({ state: "success" });
      }
    }
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany({}, () => {
      res.json({ state: "All plans will be deleted 🚮" });
    });
  }
});

app.get("/", (req, res) => {
  db.collection("plans")
    .find()
    .toArray((err, items) => {
      if (err) {
        console.error(err);
        res.render("reja", { items: [] });
      } else {
        res.render("reja", { items: items });
      }
    });
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

module.exports = app;
