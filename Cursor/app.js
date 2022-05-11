const userPointer = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-links li");
const userImage = document.querySelector(".main-img");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  userPointer.style.top = e.pageY + "px";
  userPointer.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    userPointer.classList.add("cursor-grow");
    link.classList.add("link-over");
  });

  link.addEventListener("mouseleave", () => {
    userPointer.classList.remove("cursor-grow");
    link.classList.remove("link-over");
  });
});

userImage.addEventListener("mouseover", () => {
  userPointer.classList.add("image-grow");
});

userImage.addEventListener("mouseleave", () => {
  userPointer.classList.remove("image-grow");
});
