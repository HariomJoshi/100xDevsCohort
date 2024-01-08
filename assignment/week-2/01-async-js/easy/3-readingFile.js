const fs = require("fs");

function print(err, content) {
  console.log(content);
}

function readNprint(file) {
  fs.readFile(file, "utf-8", print);
}

function readNprint2(file) {
  fs.readFile(file, "utf-8", (err, content) => {
    if (err) console.log("error in file reading");
    else console.log(content);
  });
}
const fl = "assignments/week-2/01-async-js/easy/file.txt";
readNprint(fl);
