const inputField = document.getElementById("add-task");
const tasksList = document.getElementById("tasks-list");


function addTask() {
  if (inputField.value === "") {
    alert("you must add task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputField.value;
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    tasksList.appendChild(li);
  }
  inputField.value = "";
  saveData();
}

tasksList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", tasksList.innerHTML);
}

function showData() {
  tasksList.innerHTML = localStorage.getItem("data");
}
showData();
