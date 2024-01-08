// var d = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("called"); // the callback which we passed in the '.then()' function
//   }, 1000);
// });

// callback takes one argument and prints it

// const callback = (arg) => {
//   console.log(arg);
// };

// d.then(callback); // execution starts when control reaches here

// we could have directly passed console.log here

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("function resolved");
    }, 1000);
  });
}

async function main() {
  const a = await func1();
  console.log(a);
}

main();
