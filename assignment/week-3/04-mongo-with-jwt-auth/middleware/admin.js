// Middleware for handling auth
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../index");
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  // middleware changes a lot, basically the logic remains the same but the method to take input changes
  // note that everything sent to headers gets converted to lower case automatically
  const token = req.headers.authorization;  // Bearer fesfasefagasefsadnfjkawiesnfikjawef
  // the token will look something like this
  // Bearer kfjkdslf sdfjsfksdjklf adjf324kjkerkf9rj
  // 1. extract JWT from string
  const words = token.split(" ");  // ["Bearer", "fesfasefagasefsadnfjkawiesnfikjawef"]
  const jwtToken = words[1]; // fesfasefagasefsadnfjkawiesnfikjawef
  // since there is only one space so the second entry in the array will be the token
  // install jsonwebtoken
  // so you have to define a jwt secret which will be used to verify the token
  // 2. now you need to verify the token
  const decoded = jwt.verify(jwtToken, JWT_SECRET);
  if (decoded.username) {
    next();
  } else {
    res.status(403).json({
      msg: "You are not authenticated",
    });
  }
  // notice that here we are not giving a call to db to verify, unlike in the previous method
  // the main benefit of using JWT is it save us one Database call, this authentication is happening
  // in the memory itself
}

module.exports = adminMiddleware;
