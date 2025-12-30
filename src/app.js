const { userAuth, adminAuth } = require("./middlewares/auths");

const express = require("express");
const app = express();

app.use("/admin/login", (req, res) => {
  res.send("Welcome to Login Page");
});

app.use("/admin", adminAuth, (req, res) => {
  res.send("Login Success");
});

app.use("/user", userAuth);

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777");
});
