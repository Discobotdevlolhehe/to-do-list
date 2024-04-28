const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


document.addEventListener("DOMContentLoaded", function() {
    var inputBox = document.getElementById("input-box");
    inputBox.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            AddTask();
        }
    });
});



function AddTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span"); 
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    inputBox.focus();
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function ClearTasks() {
    var listContainer = document.getElementById("list-container");
    if (listContainer.children.length === 0) {
        alert("There are no tasks to clear!");
    } else {
        var confirmation = confirm("Are you sure you want to clear all tasks?");
        if (confirmation) {
            listContainer.innerHTML = "";
        }
    }
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();