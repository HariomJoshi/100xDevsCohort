const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db/index");
const userMiddleware = require("../middleware/user");
const { useResolvedPath } = require("react-router-dom");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  const existing = await User.findOne({ username: username });
  if (existing) {
    return res.status(411).send("User already created");
  }
  const user = new User({
    username: username,
    password: password,
  });
  user.save();
  res.json({
    message: "User created successfully",
  });
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.headers.username;
  const password = req.headers.password;
  const courseId = req.params.courseId;
  const course = await Course.findOne({ courseId: courseId });
  const user = await User.findOne({
    username: username,
    password: password,
  });
  user.purchasedCourses.push(course);
  res.status(200).json({
    msg: "Course Purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.header.username;
  const password = req.header.passoword;
  const courses = await User.findOne({
    username: username,
    password: password,
  });
  return res.status(200).json({
    purchasedCourses: courses,
  });
});

module.exports = router;
