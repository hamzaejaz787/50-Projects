const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-lists");

todoInput.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const todoItem = document.createElement("li");
    todoItem.innerText = todoInput.value;
    todoList.appendChild(todoItem);

    todoInput.value = "";
  }
});

todoList.addEventListener("click", (event) => {
  event.target.classList.toggle("completed");
});

todoList.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  event.target.remove();
});
