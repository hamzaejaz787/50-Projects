import removeActive from "./removeActive.js";

const userTitle = document.querySelector(".user-title");
const userValue = document.querySelector(".user-title-value");
const userImage = document.querySelector(".user-image");
const buttons = [...document.querySelectorAll(".icon")];

const displayUser = (person) => {
  userImage.src = person.image;
  userValue.textContent = person.name;
  userTitle.textContent = "My name is";
  removeActive(buttons);
  buttons.forEach((button) => {
    const label = button.dataset.label;
    button.addEventListener("click", () => {
      userTitle.textContent = `My ${label} is`;
      userValue.textContent = person[label];
      removeActive(buttons);
      button.classList.add("active");
    });
  });
};

export default displayUser;
