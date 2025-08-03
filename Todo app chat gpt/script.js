const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  span.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", function () {
    list.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
});
