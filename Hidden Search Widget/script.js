const button = document.querySelector(".search-btn");
const input = document.querySelector(".search-input");

button.addEventListener("click", () => {
  input.classList.toggle("input-hide");
});
