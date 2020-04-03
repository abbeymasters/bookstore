import { calcLineTotal } from './register.js';

function renderLineItem(lineItem, book) {
    const tr = document.createElement('tr');

    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(quantityCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = book.name;
    tr.appendChild(nameCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = book.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    tr.appendChild(priceCell);

    const totalCell = document.createElement('td');
    totalCell.className = 'line-item-total';
    const total = calcLineTotal(lineItem.quantity, book.price);
    totalCell.textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    tr.appendChild(totalCell);

    return tr;
}

export default renderLineItem;