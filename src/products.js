import renderBooks from './render-books.js';
import store from './data/store.js';

const list = document.getElementById('books');

// adding in pulling products from store
const books = store.getProducts();

for(let i = 0; i < books.length; i++) {
    const book = books[i];
    const dom = renderBooks(book);
    list.appendChild(dom);
}




