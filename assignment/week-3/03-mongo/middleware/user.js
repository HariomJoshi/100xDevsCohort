function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.body.username;
  if (username == "username" && password == "password") {
    next();
  } else {
    res.status(404).send("Not admin");
  }
}

module.exports = userMiddleware;
