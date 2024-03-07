document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
  
    addTaskBtn.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      } else {
        alert("Please enter a task!");
      }
    });
  
    function addTask(taskText) {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");
      taskElement.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
        <button class="edit-btn">Edit</button>
      `;
      taskList.appendChild(taskElement);
      
      const deleteBtn = taskElement.querySelector(".delete-btn");
      const editBtn = taskElement.querySelector(".edit-btn");
  
      deleteBtn.addEventListener("click", function() {
        taskElement.remove();
      });
  
      editBtn.addEventListener("click", function() {
        const newTaskText = prompt("Edit task:", taskText);
        if (newTaskText !== null) {
          taskElement.querySelector("span").textContent = newTaskText;
        }
      });
    }
  });
  