import books from './data/books.js';
import order from './data/order.js';
import renderLineItem from './render-line-item.js';
import findBook from './register.js';
import { getOrderTotal } from './register.js';

// locate the table element where your products will go
const tbody = document.querySelector('tbody');

// loop through your data
for(let i = 0; i < order.lenth; i++) {

// Create a variable for that is the singular of your domain list
    const lineItem = order[i];

// Create a variable that is the found product for that line item
    const book = findBook(books, lineItem.code);

// Pass line item and product to your DOM generation function and capture result in variable
    const dom = renderLineItem(lineItem, book);
// Append the top-level list element
    tbody.appendChild(dom);
}

// locate the table cell in the footer where the order total will go
    const tfoot = document.querySelector('order-total-cell');

// use the getOrderTotal function to calculate the order total and display
    const finalOrder = getOrderTotal(lineItem, book);
    tfoot.appendChild(finalOrder);