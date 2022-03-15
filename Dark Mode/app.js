const toggleButtons = document.querySelectorAll(".btn-container button");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");
  });
});
