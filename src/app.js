const express = require("express");
const app = express();

app.use(
  "/user",
  function (req, res, next) {
    // res.send("First Response");
    next();
  },
  (req, res, next) => {
    // res.send("Second Response");
    next();
  },
  [
    (req, res, next) => {
      //res.send("Third Response 1st");
      next();
    },
    (req, res, next) => {
      res.send("Third Response 2st");
      next();
    },
  ]
);

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777");
});
