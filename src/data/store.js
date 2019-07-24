import books from './books.js';

const store = {
    storage: window.localStorage, 
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    }, 
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    }, 
    getProducts() {
        let products = store.get('products');
        // boostrap products with books if they don't exist
        if(!products) {
            store.save('products', books);
            products = books;
        }
        return products;
    }
};

export default store;