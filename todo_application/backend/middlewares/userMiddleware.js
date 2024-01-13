const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const userMiddleware = async (req, res, next) => {
  const token = req.headers.auth.split(" ")[1];
  // extracting the actual token (i.e. removing the "Bearer")
  const decode = jwt.verify(token, JWT_SECRET);
  if (decode.username) {
    req.headers.name = decode.username;
    next();
  } else {
    res.status(401).json({
      msg: "Unauthorized access",
    });
  }
};

module.exports = userMiddleware;
