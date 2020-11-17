var enterButton = document.getElementById("enter");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function listLength() {
  return item.length;
}

function createListElement() {
  var li = document.createElement("li");
  var input = document.getElementById("userInput").value;
  var t = document.createTextNode(input);
  li.appendChild(t);
  if (input === "") {
    alert("You must write something!");
  } else {
    document.getElementById("listitems").appendChild(li);
  }
  document.getElementById("listitems").value = "";

  var lenlist = input.length;
  console.log(lenlist);

  // START ADD DELETE BUTTON
  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);
  // END ADD DELETE BUTTON

  //ADD CLASS DELETE (DISPLAY: NONE)
  function deleteListItem() {
    li.classList.add("delete");
  }
  //END ADD CLASS DELETE
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
    updatelistcount();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
    updatelistcount();
  }
}
var input = document.getElementById("listitems").appendChild(li);
if (enterButton) {
  enterButton.addEventListener("click", addListAfterClick, false);
}
if (input) {
  input.addEventListener("click", addListAfterKeypress, false);
}

/*function updatelistcount() {
	var li = document.getElementsByTagName("li");
	var x = li.length;
	var count;
	for(i=1;i<=x;++i)
	{
		count = 0;
	}
	count = i;
	document.getElementById('counts').innerHTML = counting;
}*/
