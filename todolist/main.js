const TodoForm = document.querySelector("#todo-form");
const TodoInout = document.querySelector("#todo-input");
const TodoList = document.querySelector("#todo-list");

document.addEventListener("DOMContentLoaded", loadTask);
function loadTask() {
  //getting old task from localStorage
  const task = getTaskFromLocalStorage();

  task.forEach(task => {
    addTaskToDom(task)
    // const task = getTask
  });



}

//adding sumbit

TodoForm.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();

  const taskText = TodoInout.value.trim();
  if (taskText !== "") {
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    // create li element
    addTaskToDom(task);
    saveTaskToLocalStorage(task);
    TodoInout.value = "";
  }
}
function addTaskToDom(task) {
  const li = document.createElement("li");
  li.className = `todo-item  ${task.completed ? "completed" : ""}`;
  li.dataset.id = task.id;

  li.innerHTML = `
    <input type = "checkbox" class = "compelete-chechkbox">
    <span class ="task">${task.text}</span>
    <button class = "edit-btn">Edit</button>
    <button class = "delete-btn"> Delete</button>
    `;

  TodoList.appendChild(li);

  attachEventListeners(li, task)
}
function attachEventListeners(li,task) {
  const deleteBtn = li.querySelector(".delete-btn");
  const editBtn = li.querySelector(".edit-btn")


  deleteBtn.addEventListener("click", function(){
    handleDelete(task.id,li)
  })

  editBtn.addEventListener("click", function(){
    handleEdit(task.id, li);
  })
}

function handleEdit(_taskId, li) {

  const taskSpan = li.querySelector(".task");

  

  const newTaskText = prompt("Edit your task:", taskSpan.textContent)
  if(newTaskText !== null && newTaskText.trim() !== ""){
    //update the localStorage
    updateTask(taskId, newTaskText);


    //update the dom

    taskSpan.textContent = newTaskText;
  }

}
function updateTask(id, newTaskText) {
  const tasks = getTaskFromLocalStorage();
  const task = tasks.find(task => task.id == id);

  if (task) {
    task.text = newTaskText;
    localStorage.setItem("task", JSON.stringify(task));
  }
}

function handleDelete(id,li) {
  let task = getTaskFromLocalStorage();
  task = task.filter(task => task.id != id)

  localStorage.setItem("task", JSON.stringify (task));

  li.remove();

}



function saveTaskToLocalStorage (task){

  const oldTask = JSON.parse(localStorage.getItem("task")) || [];

  oldTask.push(task);



  localStorage.setItem("task", JSON.stringify(oldTask));
}


function getTaskFromLocalStorage (){

  const oldTask = JSON.parse(localStorage.getItem("task")) || [];
  return oldTask


}

