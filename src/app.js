const express = require("express");

const app = express();

app.listen(7777, function () {
  console.log("Server is running at port 3000");
});

app.use("/test", (req, res) => {
  res.send("Hello From Server 2222");
});
