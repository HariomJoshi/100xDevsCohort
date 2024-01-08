const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const existing = await Admin.findOne({ username: username });
  if (existing) {
    return res.send("User Already exists");
  }
  const admin = new Admin({
    username: username,
    password: password,
  });
  admin.save();
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.title;
  const description = req.description;
  const price = req.price;
  const imageLink = req.imageLink;
  const courseId = 2;
  const existing = await Course.findOne({ title: title });
  if (existing) {
    res
      .status(404)
      .send("Course with this title already exists in the database");
  }
  const course = new Course({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
    courseId: courseId,
  });
  course.save();
  res.json({
    message: "Course created successfully",
    courseId: 123,
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
