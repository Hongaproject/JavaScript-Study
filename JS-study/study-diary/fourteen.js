const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list");

function painToDo(newTodo){}

function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    painToDo(newTodo);
}

todoForm.addEventListener("submit", todoSubmit);