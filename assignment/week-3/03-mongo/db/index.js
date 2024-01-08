const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://hariom:QMD1kCUoqWsYTlPc@courses.omtqa6o.mongodb.net/"
);
// NOTE- if you want to create a database with your own name, enter it after the link
// eg - mongodb+srv://hariom:QMD1kCUoqWsYTlPc@courses.omtqa6o.mongodb.net/course_selling_app
// our database will be named as course_selling_app

// first table will be of Admins and entries will be in the following format
// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

// second table will be of Users and the entries will be in the following format
const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      // it is reffering to course schema
      // so we are creating a sort of pointer to an entry in the table named "Course" here.
    },
  ],
});

// third table will be of courses and the entrie will be in the following format
const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  // note that we don't need to define an entry of object id because it is given by mongoDB
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
