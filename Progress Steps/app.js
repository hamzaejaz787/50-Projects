const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const steps = document.querySelectorAll(".steps-container span");
const progress = document.querySelector("#progress");
let currentProgress = 1;

next.addEventListener("click", () => {
  currentProgress++;

  if (currentProgress > steps.length) {
    currentProgress = steps.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentProgress--;

  if (currentProgress < 1) {
    currentProgress = 1;
  }

  update();
});

function update() {
  steps.forEach((step, index) => {
    if (index < currentProgress) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (steps.length - 1)) * 100 + "%";

  if (currentProgress === 1) {
    prev.disabled = true;
  } else if (currentProgress === steps.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
