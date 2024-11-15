console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
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

//1 //expressga kirib kelayotgan ma`lumotlarga bog`liq kodlar yoziladi! // KIRISH CODE
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: sessionlarga bog`liq narsa yoziladi bizni misolda bu narsa yo`q //SESSION CODE

//3: BSS tanlangan // VIEWS CODE

app.set("veiews", "views");
app.set("view engine", "ejs");

//4 ROUTING CODE
app.post("/create-item", (req, res) => {
  console.log(req.body);
});
app.get("/", function (req, res) {
  res.render("harid");
});
app.get("/author", function (req, res) {
  res.render("author", { user: user });
});
// app.get("/gift", function (req, res) {
//   res.end("<h1>IT is not over until i win</h1>");
// });

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(` The server is running successfully in this port: ${PORT}`);
});
