const loginMiddleware = (req, res, next) => {
  const token = req.headers.auth;
  if (token) {
    next();
  } else {
    res.status(411).json({
      msg: "missing jwt token",
    });
  }
};

const signupMiddleware = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!username || !password) {
    res.status(409).json({
      msg: "Username or password missing",
    });
  } else {
    next();
  }
};

module.exports = {
  loginMiddleware,
  signupMiddleware,
};
