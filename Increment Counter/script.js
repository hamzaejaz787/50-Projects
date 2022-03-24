const counterDisplay = document.querySelector(".counter");

let total = 1000;

let int = setInterval(counterIncrement, 1);

function counterIncrement() {
  total++;

  if (total > 9999) {
    clearInterval(int);
  }

  counterDisplay.innerText = total;
}
