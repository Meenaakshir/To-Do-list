function displaytasklist()
{
  var t = document.getElementById("task");
  var labels = document.getElementById('toggleAll');
    var li = document.createElement('li');
    var div = document.createElement('div');
    var t = document.createElement("INPUT");
    t.setAttribute("type", "checkbox");
    t.setAttribute("id", "toggle");
    t.classList.add('toggle')
    div.classList.add('view');
    li.setAttribute("id", b);
    b++;
    var a = document.getElementById('lists');
    //var liList = document.getElementById('lists');
    var lab = document.createElement('label');
    lab.appendChild(document.createTextNode(y.value));
    li.appendChild(div);
    div.appendChild(input);
    div.appendChild(lab);
    a.appendChild(li);
    document.getElementById('task').value = "";
    document.getElementById('main').style.display = "block";
    document.getElementById('foot').style.display = "block";
    labels.style.display = "block";
}
var t = document.getElementById("task");
t.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === 13) {
        taskList();
        itemCount();
    }

});

