const listContainer =document.getElementById("list-container");
const inputBox = document.getElementById("input-text");

function saveTask(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function addTask() {
    if (inputBox.value === '') {
        alert("Enter The Un-Completed Task")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value="";
    saveTask();
}

listContainer.addEventListener("click",function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    }else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }

});


function showTask(){
    listContainer.innerHTML =localStorage.getItem("data");
}
showTask();

inputBox.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});