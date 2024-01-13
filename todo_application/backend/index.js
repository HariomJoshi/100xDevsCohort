const express = require("express");
const app = express();
const todoRouter = require("./routes/todo");
const { JWT_SECRET, PORT } = require("./config");
const jwt = require("jsonwebtoken");
const { User } = require("./db/index");
const {
  loginMiddleware,
  signupMiddleware,
} = require("./middlewares/login-signup");
app.use(express.json());

app.use("/user", todoRouter);

app.get("/login", loginMiddleware, (req, res) => {
  const token = req.headers.auth.split(" ")[1];
  const decoded = jwt.verify(token, JWT_SECRET);
  if (decoded.username) {
    // console.log(decoded.username);
    res.status(200).json({
      msg: "user logged in successfully",
    });
  } else {
    res.status(411).json({
      msg: "user verification failed",
    });
  }
});

app.post("/signup", signupMiddleware, async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const exists = await User.findOne({
    username,
  });

  if (exists) {
    res.status(200).json({
      msg: "user already exists",
    });
  } else {
    try {
      await User.create({
        username: username,
        password: password,
      });
    } catch (e) {
      return res.json({
        msg: "Error occured while creating the user",
      });
    }
  }
  let token = jwt.sign(
    {
      username,
    },
    JWT_SECRET
  );
  token = "Bearer " + token;

  return res.status(200).json({
    msg: "User created successfully",
    token: token,
  });
});

app.listen(PORT, () => {
  console.log(`todo is live in port ${PORT}`);
});
