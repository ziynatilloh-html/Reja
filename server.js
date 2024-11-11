console.log("Web serverni boshlash");
const express = require("express");

const app = express();
const http = require("http");

//1 //expressga kirib kelayotgan ma`lumotlarga bog`liq kodlar yoziladi! // KIRISH CODE
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: sessionlarga bog`liq narsa yoziladi bizni misolda bu narsa yo`q //SESSION CODE

//3: BSS tanlangan // VIEWS CODE

app.set("veiews", "views");
app.set("view engine", "ejs");

//4 ROUTING CODE
app.get("/hello", function (req, res) {
  res.end("<h1>Ha ishlaganiga hursand bo`lib o`tiribsanmi</h1>");
});
app.get("/gift", function (req, res) {
  res.end("<h1>IT is not over until i win</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(` The server is running successfully in this port: ${PORT}`);
});
