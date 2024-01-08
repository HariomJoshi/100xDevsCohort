const express = require("express");
const port = 3000;
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  const kID = req.query.kidneyID;
  const username = req.headers.username;
  const pass = req.headers.password;
  console.log(kID);
  if (kID > 2 || kID < 0) {
    res.status(411).json({
      msg: "kidney number out of human capacity",
    });
  }
  console.log(username);
  if (username != "Hariom" || pass != "hariom123") {
    res.status(403).json({
      msg: "User does not exists",
    });
  }
  // now our actual logic runs after perfoming the tests
  // so for seperation of concerns we do the above checks in a seperate file known as
  // middle wares
  res.send("user is Healthy");
});

app.listen(port, () => {
  console.log(`live on port ${port}`);
});
