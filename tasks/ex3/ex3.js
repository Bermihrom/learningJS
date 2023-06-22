let myNodeList = document.getElementsByTagName("LI");
let i;
for(i=0; i<myNodeList.length; i++){
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "closeToDo";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}
let close = document.getElementsByClassName("closeToDo");
for(i=0; i<close.length; i++){
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let list = document.querySelector("ul");
list.addEventListener("click", function(ev){
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle("done");
    }
}, false)

function newElement(){
    let li = document.createElement("li");
    let inputValue = document.getElementById("myToDoInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ""){
        alert("This field can`t be empty!");
    }else{
        document.getElementById("myToDoList").appendChild(li);
    }

    document.getElementById("myToDoInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "closeToDo";
    span.appendChild(txt);
    li.appendChild(span);

    for(i=0; i<close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}