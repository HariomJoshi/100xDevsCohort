const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;
app.use(express.json());
app.post("/", (req, res) => {
  // app.get is a promise
  console.log(req.body);
  // the following data is coming from queries in postman
  console.log(req.query.name);
  console.log(req.query.surname);
  res.send("<b>Hello world!</b>");
});

app.get("/sum", (req, res) => {
  let a = Number(req.query.a);
  let b = Number(req.query.b);
  const sum = a + b;
  // res.json({
  //   sum: sum,
  // });
  res.send(String(sum));
});

// app.get("/hariom", (req, res) => {
//   res.json({
//     name: "Hariom Joshi",
//     rollno: "2023CA40",
//   });
// });

// app.post("/auth", (req, res) => {
//   // console.log(req.headers);
//   console.log(req.body);
//   res.json({
//     msg: "Hi there",
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening to port ${port}`);
});
