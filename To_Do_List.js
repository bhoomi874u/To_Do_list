//let list=document.getElementById("taskInput").values
function addTask(){
let taskInput=document.getElementById("taskInput")
let taskList=document.getElementById("taskList")
let li=document.createElement("li")
let innerHTML=`<input type="checkbox" id=${taskInput.value}`
innerHTML+=`<label for<${taskInput.value}>${taskInput.value}</label>`
li.innerHTML=innerHTML 
taskList.appendChild(li)
taskInput.value=""

}
function taskCompleted(){
    let taskList=document.getElementById("taskList")
    let tasks=taskList.getElementsByTagName("li")
    for(let i=0;i<tasks.length;i++){
        let checkbox=tasks[i].getElementsByTagName("input")[0]
        if(checkbox.checked){
            tasks[i].style.textDecoration="line-through"
            console.warn("Task Completed:"+tasks[i].innerText)
        }
        else{
            tasks[i].style.textDecoration="none"

        }

    }
}
    function taskDeleted(){
        let taskList=document.getElementById("taskList")
        let taskDelete=taskList.getElementsByTagName("li")
        for(let i=taskDelete.length-1;i>=0;i--){
            let checkbox=taskDelete[i].getElementsByTagName("input")[0]
            if(checkbox.checked){
                taskList.removeChild(taskDelete[i])
                console.warn("Task Deleted:"+taskDelete[i].innerText)
            }
            else{
                continue
            }

        }

    }
function undoDeleted(){
let tasks=document.getElementById("taskList")
let li =document.createElement("li")
li.innerHTML=`<input type="checkbox" id="Undone Task">
<label for="Undone Task">Undone Task</label>`
tasks.appendChild(li)

}
function saveTasks() {
    let taskList = document.getElementById("taskList");
    let tasks = [];

    for (let li of taskList.children) {
        let checkbox = li.getElementsByTagName("input")[0];
        let label = li.getElementsByTagName("label")[0];

        tasks.push({
            text: label.innerText,
            completed: checkbox.checked
        });
    }

    localStorage.setItem("task", JSON.stringify(tasks));
}

saveTasks()
function loadTasks() {
    let savedTasks = JSON.parse(localStorage.getItem("task"));
    if (!savedTasks) return;

    let taskList = document.getElementById("taskList");

    savedTasks.forEach((task) => {
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.onchange = saveTasks;

        let label = document.createElement("label");
        label.innerText = task.text;

        li.appendChild(checkbox);
        li.appendChild(label);
        taskList.appendChild(li);
    });
}

window.onload = function () {
    loadTasks();
};
