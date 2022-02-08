const counter = document.querySelector("#counter-value");
const counterButtons = document.querySelectorAll(".button-container");
let counterValue = 0;

counterButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.classList.contains("decrease")) {
      counterValue--;
    } else if (e.target.classList.contains("increase")) {
      counterValue++;
    } else {
      counterValue = 0;
    }

    if (counterValue > 0) {
      counter.style.color = "#74D87E";
    } else if (counterValue < 0) {
      counter.style.color = "#F67B7B";
    } else {
      counter.style.color = "#FFF";
    }

    counter.textContent = counterValue;
  });
});
