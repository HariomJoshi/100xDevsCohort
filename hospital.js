const express = require("express");
const app = express();
const port = 3000;
var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];
// the above is our default state
// this is what we have seeded the database with
app.use(express.json());
app.get("/", (req, res) => {
  const kidneys = users[0].kidneys;
  console.log(kidneys);
  const noOfKidneys = kidneys.length;
  const healthy = kidneys.filter((kidney) => {
    return kidney.healthy == true;
  });
  const noOfHealthyKidneys = healthy.length;
  console.log(noOfHealthyKidneys);
  res.json({
    TotalKidneys: noOfKidneys,
    HealthyKidneys: noOfHealthyKidneys,
    UnhealthyKidneys: noOfKidneys - noOfHealthyKidneys,
  });
});

// we want to add a new kidney
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  console.log(isHealthy);

  users[0].kidneys.push({ healthy: isHealthy });
  res.send("Updated Successfully");
});

// here we want to change all the unhealthy kidneys with the healthy ones
app.put("/", (req, res) => {
  users.map((user) => {
    if (user.name == req.body.name) {
      user.kidneys.map((kidney) => {
        kidney.healthy = true;
      });
    }
  });
  res.json({
    status: "Updated Successfully",
  });
});

function noOfUnhealthyKidneys() {
  let count = 0;
  users.map((user) => {
    user.kidneys.map((kidney) => {
      if (kidney.healthy == false) {
        count += 1;
      }
    });
  });
  return count;
}

// removing all the unhealthy kidneys
app.delete("/", (req, res) => {
  // now it may be possible that user has no unhealthy kidneys,
  // so it is a bad input , return status code 411
  if (noOfUnhealthyKidneys() == 0) {
    res.status(411).json({
      status: "Bad input",
    });
  }
  users.map((user) => {
    if (user.name == req.body.name) {
      user.kidneys = user.kidneys.filter((kidney) => {
        return kidney.healthy == true;
      });
    }
  });
  res.json({
    status: "removed unhealthy kidneys",
  });
});

app.listen(port, () => {
  console.log(`hospital live at ${port}`);
});
