const enterItem = () => {
  let userInput = document.getElementById("input").value;
  let list = document.getElementById("list");
  let newItem = document.createElement("li");
  newItem.appendChild(document.createTextNode(userInput));
  list.appendChild(newItem);
  document.getElementById("input").value = "";
}

const strike = (elem) => {
  elem.style="text-decoration:line-through";
}

const removeItem = () => {
  let userInput = document.getElementById("input2").value;
  let list = document.getElementById("list");
  for (let i = 0; i < list.childNodes.length; ++i) {
    if (list.childNodes[i].innerText == userInput) {
      strike(list.childNodes[i]);
    }
  }
  document.getElementById("input2").value = "";
}
