const itemList = document.getElementById("item-list");

let items = [];

// window.addItem = function(){

// }
let count = 0;

function addItem() {
  const itemInput = document.getElementById("item-input");
  const error = document.getElementById("error");
  const newItem = itemInput.value.trim();
  const len = document.getElementById("len");
  const container  =  document.querySelector(".container");
  // container.style.backgroundColor = "pink";

  if (newItem) {
    error.innerHTML = "";
    items.push(newItem);
    count++;
    itemInput.value = "";
    displayList();
    len.textContent = count;
  } else {
    error.innerHTML = "Please add an item";
    error.style.color = "red";
  }
}

function displayList() {
  itemList.innerHTML = "";
  items.forEach((item, index) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = item;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit";

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = item;
    editInput.className = "edit-input";
    editInput.style.display = "none";

    editButton.onclick = function () {
      if (editInput.style.display === "none") {
        editInput.style.display = "inline";
        span.style.display = "none";
        editButton.textContent = "Save";
        deleteButton.style.display = "none";
      } else {
        editInput.style.display === "none";
        span.style.display = "inline";
        items[index] = editInput.value;
        displayList();
      }
    };

    deleteButton.onclick = function () {
      items.splice(index, 1);
      displayList();
      count--;
      len.textContent = count;
    };

    li.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(editInput);
    li.appendChild(editButton);
    itemList.appendChild(li);

    window.addItem = function () {
      const itemInput = document.getElementById("item-input");
      const itemNew = itemInput.value.trim();

      if (itemNew) {
        items.push(itemNew);
        itemInput.value = "";
        displayList();
      }
    };
  });
}

displayList();
