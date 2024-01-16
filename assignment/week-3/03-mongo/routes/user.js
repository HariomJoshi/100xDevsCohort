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
  await User.create({
    username: username,
    password: password,
  });
  res.json({
    message: "User created successfully",
  });
});

// notice that there is no middleware here, i.e. everyone  can hit this endpoint
router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await User.find({});
  res.json({
    response,
  });
});

router.post("/cxourses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.headers.username;
  // query is different, params are different
  // query -> after question mark and colons
  // params -> after backslash looks just like route
  const courseId = req.params.courseId;
  // don't forget to do input validation here with the help of zod
  // const user = await User.findOne({
  //   username: username,
  // });
  // console.log(user);
  try {
    await User.updateOne(
      {
        username: username,
      },
      {
        // this syntax is used to push to a particular array in the database
      }
    );
  } catch (e) {
    console.log(e);
  }

  res.status(200).json({
    msg: "Course Purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const findUser = await User.findOne({
    username: username,
  });
  // now that we have the user
  console.log(findUser.purchasedCourses);

  // we have to find all the courses to which array --> findUser.purchasedCourses have reference to
  const courses = await Course.find({
    _id: {
      $in: findUser.purchasedCourses,
    },
    // this will give us all the courses which we have stored reference to
    // if one reference is stored more than once so it will return it only once
  });
  // you can see that we are getting the object ids of the courses bought by the above user here

  res.status(200).json({
    // purchasedCourses: courses,
    courses: courses,
  });
});

module.exports = router;
