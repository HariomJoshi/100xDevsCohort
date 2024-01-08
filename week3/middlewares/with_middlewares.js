const express = require("express");
const zod = require("zod");
const scema = zod.array(zod.number());
// now suppose we have an input which is a email
// {
//     email: string=> email @ .com
//     password: => atleast 8 letters
//     country: IN/US
// }

// write a Zod scema for the above input

const schema2 = zod.object({
  email: zod.string().email(), // checks whether the given string is an email or not
  password: zod.string().min(8), // checks if password is atleast 8 characters long
  country: z.literal("IN").or(z.literal("US")),
});

const app = express();
const port = 3000;

app.use(express.json());

// following function is a middleware
// a middleware always takes 3 parameteres as input

function kidneyValidator(req, res, next) {
  // taking the number of kidneys from query params
  const kidney = req.query.kidney;
  const name = req.body.name;
  const pass = req.body.pass;
  const kidneyNumbers = req.body.knumbers;
  const response = scema.safeParse(kidneyNumbers);
  console.log(response);
  // in this response we get lots of data about input validation
  // one of them is success
  // here since the schema defined is a array of numbers so it checks wheter kidneyNumbers is a array of numbers or not

  if (!response.success) {
    res.json({
      msg: "K numbers is not an array",
    });
  }
  // we can also do input validation here
  if (!kidney || !name || !name) {
    res.json({
      msg: "Some more data was expected",
    });
    // you can obviously be more accurate and write a different case for each kidney
  }
  // check if the username and password is correct
  // usually we don't do this in middleware
  if (name != "Hariom" || pass != "pass") {
    res.json({
      msg: "Incorrect pass or username",
    });
  } else if (kidney > 3) {
    res.json({
      msg: "less kidneys expected",
    });
  } else {
    next();
  }
}

app.post("/kidneys", kidneyValidator, (req, res) => {
  res.send("Successful");
});

//this is a global catch
// same as the catch block in try catch statements, but since it catches any exception so it is called a global catch

app.use((err, req, res, next) => {
  // global catch always takes for parameteres as input
  console.log(`Error occured ${err}`);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
