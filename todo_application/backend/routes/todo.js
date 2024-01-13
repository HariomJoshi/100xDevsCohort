const { Router } = require("express");
const { ObjectId } = require("mongodb");
const { User, Todo } = require("../db/index");
const userMiddleware = require("../middlewares/userMiddleware");
const router = Router();

// return all the todos of a particular user
router.get("/todos", userMiddleware, async (req, res) => {
  let username = req.headers.name;
  const user = await User.findOne({
    username,
  });
  console.log(user.todos);

  if (user) {
    try {
      // find is an async function
      // earlier I wasn't using await before it
      const todos = await Todo.find({
        _id: {
          $in: user.todos,
        },
      });
      res.status(200).json({
        todos,
      });
    } catch (e) {
      console.log(e);
      res.status(411).json({
        msg: "Some error occured",
      });
    }
  } else {
    res.status(411).json({
      msg: "user does not exists",
    });
  }
});

// the following is the logic to add the todo to the list
router.post("/todos", userMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const { _id } = await Todo.create({
    title: title,
    description: description,
    completed: false,
  });
  // console.log(_id);
  const username = req.headers.name;
  // console.log(username);
  try {
    await User.updateOne(
      {
        username: username,
      },
      {
        $push: { todos: _id },
      }
    );
  } catch (e) {
    console.log(e);
    return res.status(411).json({
      msg: "Error adding the todo",
    });
  }
  return res.status(200).json({
    msg: "todo added successfully",
  });
});

router.put("/completed", async (req, res) => {
  // console.log(todoId);
  try {
    await Todo.update(
      {
        _id: req.body.id,
      },
      {
        completed: true,
      }
    );
  } catch (e) {
    console.log(e);
    res.status(411).json({
      msg: "Some error occured while updation",
    });
  }
  res.status(200).json({
    msg: "Updation successful",
  });
});

module.exports = router;
