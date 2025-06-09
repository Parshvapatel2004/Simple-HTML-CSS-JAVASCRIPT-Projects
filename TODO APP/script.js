const Input = document.getElementById("Input");
const Btn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

Btn.addEventListener("click", addTodo);
Input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});

function addTodo() {
  const todoText = Input.value.trim();
  if (todoText !== "") {
    const li = document.createElement("li");
    li.textContent = todoText;
    todoList.appendChild(li);
    Input.value = "";
  }
}
