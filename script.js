const addTask = document.querySelector("#add");
let toDo = document.querySelector(".todo");

addTask.onclick=()=>{
const getNewTask = document.querySelector("#todo-input");
const newTask=getNewTask.value.trim();

if (newTask === ""){
    alert("Please enter some text! ");
    return;
}

const newDiv = document.createElement("li");
const newList = document.createElement("span");
const delBtn = document.createElement("button");
newList.textContent=newTask;
newList.className = 'task-text';

delBtn.classList.add("delBtn");
delBtn.innerText="Delete";

newDiv.appendChild(newList);
newDiv.appendChild(delBtn);
toDo.append(newDiv);


delBtn.addEventListener("click",()=>{
    toDo.removeChild(newDiv);

})
getNewTask.value='';
}
