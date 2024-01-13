const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

module.exports = todoSchema;
