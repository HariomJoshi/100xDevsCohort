const { Admin } = require("../db/index");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.body.username;
  const password = req.body.username;
  const present = await Admin.findOne({
    username: username,
    password: password,
  });
  if (present) {
    next();
  } else {
    res.status(403).send("No permission");
  }
}

module.exports = adminMiddleware;
