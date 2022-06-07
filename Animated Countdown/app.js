const numbers = document.querySelectorAll(".numbers span");
const countdown = document.querySelector(".countdown");
const final = document.querySelector(".animation-start");
const replay = document.getElementById("replay");

runCountdown();

function resetDOM() {
  countdown.classList.remove("hide");
  final.classList.remove("show");

  numbers.forEach((number) => {
    number.classList.value = "";
  });

  numbers[0].classList.add("in");
}

function runCountdown() {
  numbers.forEach((number, idx) => {
    const nextToLast = numbers.length - 1;

    number.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== nextToLast) {
        number.classList.remove("in");
        number.classList.add("out");
      } else if (e.animationName === "goOut" && number.nextElementSibling) {
        number.nextElementSibling.classList.add("in");
      } else {
        countdown.classList.add("hide");
        final.classList.add("show");
      }
    });
  });
}

replay.addEventListener("click", () => {
  resetDOM();
  runCountdown();
});
