const { Router } = require("express");
const router = Router();
const { User } = require("../db/index");
const userMiddleware = require("../middleware/user");
const bodyParser = require("body-parser");
// User Routes
router.use(bodyParser.json());
// only the authentication logic is different rest is all same
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  const existing = await User.findOne({
    username: username,
    password: password,
  });
  if (existing) {
    res.status(411).json({
      msg: "user already exists",
    });
    // note that
    // either put the further logic in else block
    // or return the value, any one of them would work
  } else {
    await User.create({
      username: username,
      password: password,
    });
    res.status(200).json({
      msg: "User created successfully",
    });
  }
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
