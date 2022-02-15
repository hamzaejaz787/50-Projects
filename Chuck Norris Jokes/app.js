const showJoke = document.querySelector(".show-joke");
const jokeBtn = document.querySelector(".joke-btn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://api.chucknorris.io/jokes/random", config)
    .then((res) => res.json())
    .then((data) => {
      showJoke.innerHTML = data.value;
    });
}
