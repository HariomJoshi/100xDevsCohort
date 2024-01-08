function counter(a) {
  function logAndInc() {
    console.log(a);
    a++;
  }
  setInterval(logAndInc, 1000);
}

counter(0);
