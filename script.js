
var input = document.getElementById("inputField")
var tasks = document.getElementById("Tasks")
function addTheTask() {
    if (input.value != "") {
        var li = document.createElement("li")
        var p = document.createElement("p")
        p.innerHTML = input.value
        li.appendChild(p)
        tasks.appendChild(li)
        var div = document.createElement("div")
        li.appendChild(div)
        var add = document.createElement("button")
        add.innerHTML = "Done"
        div.appendChild(add)
        add.onclick = function () {
            if (p.style.textDecoration != "line-through") {
                p.style.textDecoration = "line-through"
            }
            else {
                p.style.textDecoration = "none"
            }
        }
        var span = document.createElement("button")
        span.innerHTML = "X"
        div.appendChild(span)
        span.onclick = function () {
            li.parentElement.removeChild(li);
        };
        input.value = ""
    }
    else {
        alert("error")
    }
}
setInterval(h, 1000)
function h() {
    var offsetHeight = document.getElementById('height');
    console.log(offsetHeight.clientHeight)
    if (offsetHeight.clientHeight > 600) {
        document.getElementById("height").style.height = "600px"
        document.getElementById("height").style.paddingBottom = "30px"
    }
};
