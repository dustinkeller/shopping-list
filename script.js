var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function deleteAfterClick(event) {
    event.target.parentNode.remove();
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    
    var delButton = document.createElement("button")
    delButton.appendChild(document.createTextNode("delete"))
    delButton.addEventListener("click", deleteAfterClick);

    li.appendChild(delButton)
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() != 0) {
        createListElement();
    }
}

function addListAfterKeydown(event) {
    if (inputLength() != 0 && event.key == "Enter") {
        createListElement();
    }
}

function toggleDoneAfterClick(event) {
    event.target.classList.toggle("done");
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeydown);

for (let i = 0; i < ul.children.length; i++) {
    ul.children[i].addEventListener("click", toggleDoneAfterClick);
    ul.children[i].children[0].addEventListener("click", deleteAfterClick);
}