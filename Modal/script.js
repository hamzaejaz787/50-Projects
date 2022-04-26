const modalButton = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-btn");

modalButton.addEventListener("click", () => {
  modal.classList.add("open-modal");
});

closeButton.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});
