var enterButton = document.getElementById("enter");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var input = document.getElementById("userInput").value;
	var li = document.createElement("li"); 
	var t = document.createTextNode(input);
	li.appendChild(t); 
	document.getElementById("listitems").appendChild(li); 
	document.getElementById("input").value = ""; 


	
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH


	// START ADD DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
	//END ADD CLASS DELETE
}


function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();
	}
	
}



function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
		createListElement();
	} 
}

if(enterButton){
	enterButton.addEventListener("click",addListAfterClick, false);
}
if(input){
	input.addEventListener("click",addListAfterKeypress, false);
}
/*enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);*/

