document.addEventListener("DOMContentLoaded",function(){
    const addTaskBtn =document.getElementById("addTaskBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");


addTaskBtn.addEventListener("click", function(){
    const task = taskInput.value.trim();
    if (task !== ""){
        const taskItem = createTaskItem(task);
        taskList.appendChild('taskitem');
        taskInput.value = "";
    }
});

function createTaskItem(task){
    const taskitem = document.createElement('li');
taskItem.className = "task-text";


const taskText = document.createElement('span');
 taskText.className = "task-text";
 taskText.textContent = task;
 taskText.textContent= task;


 const deletBtn = document.createElement("button");
 deletBtn.textContent = "Delete";
 deletBtn.addEventListener("click", function(){
     taskitem.remove();
 })
taskItem.appendChild(taskText);
taskItem.appendChild(deletBtn);
return taskItem;


}
});