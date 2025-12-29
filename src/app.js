const express = require("express");
const app = express();

app.get("/test", function (req, res) {
  res.send("GET is working");
});

app.post("/test", function (req, res) {
  res.send("POST is working");
});

app.delete("/test", function (req, res) {
  res.send("Data Deleted Successfully");
});

app.use("/", (req, res) => {
  res.send("Hello from the server!!");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777");
});
