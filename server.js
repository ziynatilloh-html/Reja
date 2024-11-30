const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://ziynatillokht:Nasiba18%21%21@cluster0.zbrju.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("DB successfully connected");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      const PORT = 5005;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
