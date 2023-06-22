function changeContent(){
    let r_elem = document.getElementById("rows").value;
    let c_elem = document.getElementById("columns").value;
    let content = document.getElementById("content").value;
    document.querySelector(`#myTable tr:nth-child(${r_elem}) td:nth-child(${c_elem})`)
        .innerHTML = content;
}