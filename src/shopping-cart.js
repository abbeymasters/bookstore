import books from './data/books.js';
import cart from './data/order.js';
import renderLineItem from './render-line-item.js';
import findBook from './register.js';
import { orderTotal } from './register.js';

// locate the table element where your products will go
const tbody = document.querySelector('tbody');

// loop through your data
for(let i = 0; i < cart.length; i++) {

// Create a variable for that is the singular of your domain list
    const lineItem = cart[i];

// Create a variable that is the found product for that line item
    const book = findBook(books, lineItem.code);

// Pass line item and product to your DOM generation function and capture result in variable
    const dom = renderLineItem(lineItem, book);
// Append the top-level list element
    tbody.appendChild(dom);
}

// locate the table cell in the footer where the order total will go
    const orderTotalCell = document.getElementById('order-total-cell');

// use the getOrderTotal function to calculate the order total
    const finalTotal = orderTotal(cart, books).toLocaleString('en-US', { style: 'currency', currency: 'USD' });;
    orderTotalCell.textContent = finalTotal;