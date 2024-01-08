const mongoose = require("mongoose");
const express = require("express");
const app = express();
// const app = require("../../assignments/week-3/01-middlewares/01-requestcount");
mongoose.connect(
  "mongodb+srv://goodhariom:NqAVYFc49rrf6LDJ@trying.gk5h40b.mongodb.net/"
);
const User = mongoose.model("users", {
  name: String,
  email: String,
  password: String,
});

// no middlewares
// no authentication
app.use(express.json());
app.get("/users", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const pass = req.body.pass;
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(404).send("User already exists");
  }
  const user = new User({
    name: username,
    email: email,
    password: pass,
  });
  user.save();
  // /this is the line which actually save the above data in the database
  res.json({
    msg: "user created successfully",
  });
});

app.listen(3000);
