function createTable(){
    let rows = document.getElementById("rows").value;
    let cols = document.getElementById("columns").value;
    let content = document.getElementById("content").value;
    
    let mainField = document.getElementsByTagName('main')[0];
    let table = document.createElement('table');

    for(i=0; i < rows; i++){
        let tr = document.createElement('tr');
        for(j=0; j < cols; j++){
            let td = document.createElement('td');
            tr.appendChild(td);
            // td.innerText = `Row ${i} cell ${j}`
            td.innerText = content;
        }
        table.appendChild(tr);
    }
    
    mainField.prepend(table);

    // document.querySelector(`#myTable tr:nth-child(${r_elem}) td:nth-child(${c_elem})`).innerHTML = content;
}