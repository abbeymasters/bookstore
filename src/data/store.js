import books from './books.js';
import findBook from '../register.js';

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
    },
    getShoppingCart() {
        let shoppingCart = store.get('shopping-cart');
        if(!shoppingCart) {
            shoppingCart = [];        
        } return shoppingCart;
    }, 
    orderProduct(code) {
        // get shopping cart
        const getCart = store.getShoppingCart();

        // need to pull the line item
        const lineItem = findBook(getCart, code);
        // if the lineItem is in there already -- add one
        if(lineItem) {
            lineItem.quantity++;
        // otherwise add it in to array
        } else {
            let lineItem = {
                code: code,
                quantity: 1
            };
            // put in shopping cart array
            getCart.push(lineItem);
        }
        // save shopping cart
        store.save('shopping-cart', getCart);
    }, 
    getProduct(code) {
        // find the products
        const getProducts = store.getProducts();
        // find based on the code
        const foundBook = findBook(getProducts, code);
        // return product
        return foundBook;
    }
};

export default store;