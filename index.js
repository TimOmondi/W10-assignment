let id = document.querySelector('#tableID');
let firstName = document.querySelector('#tableFirstName');
let secondName = document.querySelector('#tableLastName');
let table = document.querySelector('table');

function addIntoTable() {
    let row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    
    cell1.innerHTML = id.value;
    cell2.innerHTML = firstName.value;
    cell3.innerHTML = secondName.value;
}