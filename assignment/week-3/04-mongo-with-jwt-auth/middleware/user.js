// same as admin middleware
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function userMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];
  const decoded = jwt.verify(jwtToken, JWT_SECRET);
  if (decoded.username) {
    next();
  } else {
    res.status(403).json({
      msg: "You are not authenticated",
    });
  }
}
module.exports = userMiddleware;
