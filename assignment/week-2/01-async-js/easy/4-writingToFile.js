const fs = require("fs");

function writeToFile(file, content) {
  fs.writeFile(file, content, "utf-8", (err) => {
    if (err) console.log("some error while writing to file! ");
    else console.log("file written sucessfully");
  });
}
const fl = "assignments/week-2/01-async-js/easy/file.txt";
const content =
  "This is the content that I am writing with the help of write to file function";
writeToFile(fl, content);
