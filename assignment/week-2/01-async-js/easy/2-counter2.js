function counter(a) {
  function incAndPrint() {
    console.log(a);
    a++;
    counter(a);
  }
  setTimeout(incAndPrint, 1000);
}

counter(0);
