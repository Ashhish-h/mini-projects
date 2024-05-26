const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask(){
    if(inputBox.value === ''){
        alert("Please enter a task")
    } else {
        let listItem = document.createElement("li");
        listItem.innerHTML = inputBox.value;
        listContainer.appendChild(listItem);
    }

    inputBox.value = "";
    saveTask();

}

//to store data into the local storage of the browser
function saveTask(){ 
    localStorage.setItem("data", listContainer.innerHTML);
}

// to get the data from the local storage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask(); 