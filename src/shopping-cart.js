import renderLineItem from './render-line-item.js';
import { orderTotal } from './register.js';
import store from './data/store.js';


// locate the table element where your products will go
const tbody = document.querySelector('tbody');

// load shopping cart on page load
const shoppingCart = store.getShoppingCart();

// loop through your data
for(let i = 0; i < shoppingCart.length; i++) {

// Create a variable for that is the singular of your domain list
    const lineItem = shoppingCart[i];

// Create a variable that is the found product for that line item
// going to change this to store.findBook to pull from store, not array
    const book = store.getProduct(lineItem.code);

// Pass line item and product to your DOM generation function and capture result in variable
    const dom = renderLineItem(lineItem, book);
// Append the top-level list element
    tbody.appendChild(dom);
}

// locate the table cell in the footer where the order total will go
const orderTotalCell = document.getElementById('order-total-cell');

// define books for order total
const books = store.getProducts();

// use the getOrderTotal function to calculate the order total
const finalTotal = orderTotal(shoppingCart, books).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
orderTotalCell.textContent = finalTotal;