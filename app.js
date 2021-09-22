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

  //createing todo
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoinput.value;
  todoinput.value = "";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("complete-btn");
  todoDiv.appendChild(trashButton);
  //Append Child
  todolist.appendChild(todoDiv);
}
