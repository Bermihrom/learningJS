function fun1 (){
    let rtl = document.getElementById("rtl").value;
    let rtr = document.getElementById("rtr").value;
    let rbl = document.getElementById("rbl").value;
    let rbr = document.getElementById("rbr").value;
    let ttl = document.getElementById("ttl");
    let ttr = document.getElementById("ttr");
    let tbl = document.getElementById("tbl");
    let tbr = document.getElementById("tbr");
    let block = document.getElementById("block");

    ttl.value = rtl;
    ttr.value = rtr;
    tbl.value = rbl;
    tbr.value = rbr;

    block.style.borderRadius = rtl +"px " +rtr + "px "+rbr + "px "+rbl + "px ";
}
