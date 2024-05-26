const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask(){
    if(inputBox.value === ''){
        alert("Please enter a task")
    } else {
        let listItem = document.createElement("li");
        listItem.innerHTML = inputBox.value;
        listContainer.appendChild(listItem);

        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        listItem.appendChild(span);
    }

    inputBox.value = "";
    saveTask();

}

//to change the state of the task from checked to unchecked
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveTask();
    }
});

//to store data into the local storage of the browser
function saveTask(){ 
    localStorage.setItem("data", listContainer.innerHTML);
}

// to get the data from the local storage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask(); 