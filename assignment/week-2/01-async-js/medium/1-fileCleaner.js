const fs = require("fs");
function fileCleaner(file) {
  fs.readFile(file, "utf-8", (err, content) => {
    let arr = content.split(" ");
    let cont = "";
    arr.map((element) => {
      if (element != "") {
        // console.log(element);  // log for check
        cont += element + " ";
      }
    });

    fs.writeFile(file, cont, "utf-8", (err) => {
      if (err) console.log("error while writing to file");
      else console.log("file written successfully");
    });
  });
}

const fl = "assignments/week-2/01-async-js/medium/file.txt";
fileCleaner(fl);
