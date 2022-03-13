/* Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
A Bootstrap styled table representing your choice of data.
A Bootstrap styled form that allows a user to add a new row to the table when submitted.
// let inputItems = document.querySelectorAll('input[type=text]') <-- this returns an array of input items
    // this would only require one row.insertCell
    // STILL NEED let row = table.insertRow(1)
    // for ( let i = 0; i < inputItems.length; i++ ) {
    //     row.insertCell(i).innerHTML = inputItems[i].value
    let inputData = document.querySelectorAll("input[type=text]");
    // }
*/
let id = 0;
let addButton = document.getElementById('add'); 
addButton.addEventListener('click', (evt) => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('first-name').value;
    row.insertCell(1).innerHTML = document.getElementById('last-name').value;
    row.insertCell(2).innerHTML = document.getElementById('daily-distance').value;
    row.insertCell(3).innerHTML = document.getElementById('distance-Goal').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('daily-distance').value = '';
    document.getElementById('distance-Goal').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`); 
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
} 