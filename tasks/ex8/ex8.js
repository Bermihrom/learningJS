function insert_Row(){
    let hidden = document.getElementsByClassName("hidden");
    for(i=0; i < hidden.length; i++){
        if(hidden[i].style.display === "none"){
            hidden[i].style.display = "block";
        }else{
            hidden[i].style.display = "none";
        }
    }
}
