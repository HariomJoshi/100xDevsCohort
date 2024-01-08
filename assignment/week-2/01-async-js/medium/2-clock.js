function giveTime() {
  const date = new Date();
  let currTime =
    date.getHours().toString() +
    ":" +
    date.getMinutes().toString() +
    "::" +
    date.getSeconds().toString();
  return currTime;
}
function showTime() {
  const time = giveTime();
  console.log(time);
}

function keepShowingTime() {
  setInterval(showTime, 1000);
}

keepShowingTime();
