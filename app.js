//selctors
const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-btn");
const todolist = document.querySelector(".todo-list");
//event listeners

todobutton.addEventListener("click", todo);

// functions
function todo(event) {
  //prevent form from submitting
  event.preventDefault();
  console.log("hiii");

  //createing todo
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = "heuyyy";
  newTodo.classList.add("todo-item");
  console.log(newTodo);
}
