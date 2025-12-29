const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  console.log(req.query);
  res.send({ firstName: "Tushar", lastName: "Borate" });
});

app.get("/users/:userId/:userName/:passWord", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Tushar", lastName: "Borate" });
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777");
});
