/*
Do the following steps in this file, and make sure this file is linked to the shopping-list.html file

1. Create three variables that hold references to the following elements &lt;ul&gt; &lt;input&gt; &lt;button&gt; elements.

2. Create a function that will run in response to the button being clicked.

3. Inside the function body, start off by storing the current value of the input element in a variable.

4. Next, empty the input element by setting its value to an empty string — ''.

5. Create three new elements — a list item (&lt;li&gt;), &lt;span&gt;, and &lt;button&gt;, and store them in variables.

6. Append the span and the button as children of the list item.

7. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.



8. Append the list item as a child of the list.



9. Attach an event handler to the delete button, so that when clicked it will delete the entire list item it is inside.



10. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.

*/

let itemInput = document.getElementById("item");
let list = document.getElementById("list");
let addButton = document.getElementById("addButton");
let itemEnterd = [];
addButton.addEventListener("click", function () {
  console.log("Button was clicked");
  itemEnterd.push(itemInput.value);

  draw();
});

function draw() {
  // adding the value here
  let itemLI = document.createElement("li");
  let itemSpan = document.createElement("span");
  let itemDeleteButton = document.createElement("button");
  itemSpan.innerText = itemInput.value;
  itemInput.value = "";

  itemDeleteButton.innerText = "Delete";
  itemDeleteButton.dataset.id = itemEnterd.length - 1;
  itemDeleteButton.addEventListener("click", deleteItem);

  itemLI.appendChild(itemSpan);
  itemLI.appendChild(itemDeleteButton);
  list.appendChild(itemLI);
}

function reDraw() {
  // adding the value here
  itemEnterd.forEach((item) => {
    let itemLI = document.createElement("li");
    let itemSpan = document.createElement("span");
    let itemDeleteButton = document.createElement("button");

    itemSpan.innerText = item;

    itemDeleteButton.innerText = "Delete";
    itemDeleteButton.dataset.id = itemEnterd.length - 1;
    itemDeleteButton.addEventListener("click", deleteItem);

    itemLI.appendChild(itemSpan);
    itemLI.appendChild(itemDeleteButton);
    list.appendChild(itemLI);
  });
}

function deleteItem(event) {
  let arrayIndex = event.currentTarget.dataset.id;

  itemEnterd = itemEnterd.filter((value, index) => {
    return index != arrayIndex;
  });
  list.innerHTML = "";
  reDraw();
}

window.onload = item.focus();
