//backend storage
// Use the StorageKey to access the data
var storage = localStorage.getItem('StorageKey');

//if storage is not empty/if there is something in storage 
if(storage !== null){ 
  //converting JSON String -> Javascript object
  var data = JSON.parse(storage); 

  loadData(data);
  var id = data.length; 
} else { 
  id = 0; 
  data = []; 
}

//front end
function loadData(array) {
  array.forEach(function(todo) {
    newItem(todo.name, todo.trash, todo.id);
  });
}

function newItem(todo, trash, id) {
    //console.log("Inside newItem");
    //var item = document.getElementById("input").value;
    //console.log(item);

    if (trash == true){
      return;
    }
    
    // create li and store ul in var
    var ul = document.getElementById("list");
    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("- " + todo));
    li.setAttribute('id', id);
    ul.appendChild(li);

    //erase value in li
    todo = document.getElementById("input").value = "";

    li.onclick = removeItem;
}

document.body.onkeyup = function(e) {
  if (e.keyCode == 13) {
    var todo = document.getElementById("input").value;
    newItem(todo, false, id);
    data.push({name: todo, trash: false, id: id});

    localStorage.setItem("StorageKey", JSON.stringify(data))
    id = id + 1;
  }
};

function removeItem(event) {
  element = event.target;
  element.remove();
  data[element.id].trash = true;
  localStorage.setItem("StorageKey", JSON.stringify(data));
}

