const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const bodyparser = require("body-parser");
const router = Router();
const zod = require("zod");
const courseInputValidator = zod.object({
  title: zod.string(),
  description: zod.string(),
  price: zod.number(),
  imageLink: zod.string(),
});

// Admin Routes
router.use(bodyparser.json());
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

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  // you have to use a libraries like zod here to do input validation, because the user can send anything
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  // const response = courseInputValidator.safeParse(
  //   title,
  //   description,
  //   price,
  //   imageLink
  // );
  // if (!response.success)
  //   res.json({
  //     msg: "Invalid data passed",
  //   });

  const newCourse = await Course.create({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
  });

  // newCourse now contains all the data of the entry just created in json format, so you can access any field of the data just created

  // if the user cannot be created the program will be terminated here
  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const allCourses = await Course.find({});
  // you don't need to pass anything
  res.json({
    allCourses,
  });
});

module.exports = router;
