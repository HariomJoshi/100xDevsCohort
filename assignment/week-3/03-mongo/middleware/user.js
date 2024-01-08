const { User } = require("../db/index");
// note - it will be the same as admin middleware, the only difference is the table which it hits
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.body.username;
  const password = req.body.password;
  const present = User.findOne({
    username: username,
    password: password,
  });
  if (present) {
    next();
  } else {
    res.status(403).json({
      msg: "User doesen't exists",
    });
  }
}

module.exports = userMiddleware;
