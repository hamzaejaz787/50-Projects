import getUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";

const generateUser = document.querySelector(".get-user");

const showUser = async () => {
  const person = await getUser();
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
generateUser.addEventListener("click", showUser);
