const inputItem = document.getElementById("list-input");
const button = document.getElementById("button");
const listContainer = document.getElementById("list-container");

button.addEventListener("click", () => {
  if (inputItem.value === "") {
    alert("Enter a Task!");
  } else {
    let list = document.createElement("li");
    list.innerHTML = inputItem.value;
    listContainer.appendChild(list);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    list.appendChild(span)
  }

  inputItem.value = ""
  saveData()
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }

}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showData()
