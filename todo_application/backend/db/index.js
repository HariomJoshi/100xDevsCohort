const mongoose = require("mongoose");
const userSchema = require("./model/user");
const todoSchema = require("./model/todo");
mongoose.connect(
  "mongodb+srv://hariom:QMD1kCUoqWsYTlPc@courses.omtqa6o.mongodb.net/todo_app"
);

const User = mongoose.model("User", userSchema);
const Todo = mongoose.model("Todo", todoSchema);
// mongoose.model takes two argument , arg1 and arg2
// it creates a table with name arg1 with schema arg2
// so the first argument is name (i.e. string)
// and second argument is schema (i.e. mongoose.Schema)

module.exports = {
  User,
  Todo,
};
