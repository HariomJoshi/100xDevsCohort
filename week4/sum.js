const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
function sumInputValidator(req, res, next) {
  let num1 = req.query.a;
  let num2 = req.query.b;
  if (!num1 || !num2) {
    res.status(404).json({
      msg: "input missing",
    });
  }
  next();
}

app.get("/sum", sumInputValidator, (req, res) => {
  const num1 = req.query.a;
  const num2 = req.query.b;
  res.status(200).send(`${parseInt(num1) + parseInt(num2)}`);
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
