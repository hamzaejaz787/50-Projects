const key = document.querySelector(".key");
const keyCode = document.querySelector(".keycode");
const code = document.querySelector(".code");
const intro = document.querySelector(".intro");
const keyContainer = document.querySelector(".key-container");

window.addEventListener("keydown", (event) => {
  if (event.defaultPrevented) {
    return;
  }

  intro.classList.add("hide-intro");
  keyContainer.classList.add("show-container");

  key.innerText = event.key;
  keyCode.innerText = event.keyCode;
  code.innerText = event.code;

  if (event.code == "Space") {
    key.innerText = "Space";
  }

  console.log(event);
});
