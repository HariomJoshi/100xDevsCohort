const { Router, application } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db/index");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const bodyParser = require("body-parser");
// Admin Routes
router.use(bodyParser.json());
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const existing = await Admin.findOne({ username: username });
  if (existing) {
    return res.send("User Already exists");
  }
  await Admin.create({
    username: username,
    password: password,
    //if for some reason, user is not created so the execution will stop here and the user will see status code 500
  });

  res.status(200).json({
    msg: "Admin created Successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const exists = await Admin.findOne({
    username,
    password,
  });
  const token = jwt.sign({ username }, JWT_SECRET);
  if (!exists) {
    res.json({
      msg: "user does not exists",
    });
  }
  res.status(200).json({
    token,
  });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
