
function addTodo(){
    var todo_item = document.getElementById("todo-item");

    //create list
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText);
    //creating delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.appendChild(delText) 
    delBtn.setAttribute("class", "deltbtn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText)
    //create Edit Buton
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class", "deltbtn")
    editBtn.setAttribute("onclick", "editItem(this)")



    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li);
    todo_item.value = "";
    console.log(li);
}
var list = document.getElementById("list")
function deleteItem(e){
e.parentNode.remove();
}
function editItem(e){
    var val = prompt("Enter value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
}
function deleteAll() {
    alert("Deleted")
    list.innerHTML = "";
}