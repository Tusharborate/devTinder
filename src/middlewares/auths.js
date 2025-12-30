const adminAuth = (req, res, next) => {
  console.log(req.query);
  const username = req.query.username;
  const password = req.query.password;
  if (username == "Tushar" && password == "12345") {
    next();
  } else {
    res.status(301).send("Unauthorized access to page");
  }
};

const userAuth = (req, res) => {
  res.send("This is User Auth");
};

module.exports = { adminAuth, userAuth };
