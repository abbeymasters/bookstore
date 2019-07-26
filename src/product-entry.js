import store from './data/store.js';

const form = document.getElementById('book-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const product = {
        code: formData.get('code'),
        name: formData.get('name'),
        description: formData.get('description'),
        category: formData.get('category'),
        price: formData.get('price'),
        cost: formData.get('cost')
    };

    store.addProduct(product);
    alert('You saved your book!');

    form.reset();
});