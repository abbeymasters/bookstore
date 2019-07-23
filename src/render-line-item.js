import calcLineTotal from './register.js';

function renderLineItem(lineItem, book) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = book.name;
    tr.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = 
    


    return tr;
}