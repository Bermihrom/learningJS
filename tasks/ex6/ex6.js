function changeBgc(){
    const p = document.getElementById("bgc");
    console.log("p = ", p);
    if(p.style.background === "white"){
        p.style.backgroundColor = 'green';
    }else{
        p.style.background = "white"
    }
}