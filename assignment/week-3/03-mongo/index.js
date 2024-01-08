const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
// in the following example we have used router to structure our files well
// any request that comes to /admin goes to adminRouter and any request that comes to /user goes to userRouter
// logic of further routers will be given in respective routers

app.use("/admin", adminRouter);
app.use("/user", userRouter);
// the above is just to structure the application better
// so it is good practice as above to have all the routes , middlewares, db at different folders

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
