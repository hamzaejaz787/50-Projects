const header = document.querySelector("#header");
const title = document.querySelector("#title");
const excerpt = document.querySelector("#excerpt");
const profileImg = document.querySelector("#profile_img");
const authorName = document.querySelector("#name");
const date = document.querySelector("#date");

const animatedBackgrounds = document.querySelectorAll(".animated-bg");
const animatedBackgroundTexts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"/>';
  title.innerHTML = "Lorem ipsum dolor sit amet";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
  profileImg.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg"  />';
  authorName.innerHTML = "John Doe";
  date.innerHTML = "May 14, 2022";

  animatedBackgrounds.forEach((background) => {
    background.classList.remove("animated-bg");
  });

  animatedBackgroundTexts.forEach((text) => {
    text.classList.remove("animated-bg-text");
  });
}
