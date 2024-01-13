const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
});

module.exports = userSchema;
