import books from './books.js';
import findBook from '../register.js';
import sales from './sales.js';

const store = {
    // keep storage local as opposed to session
    storage: window.localStorage, 
    
    // save function which saves the key & item to storage
    // stringify converts a JavaScript object or value to a JSON string
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    }, 
    // the get function pulls the key from storage
    // parse method parses a JSON string, constructing the JavaScript value or object described by the string.
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    }, 
    // getProducts is pulling whatever products are in the store, and if there aren't any then it's going to boostrap our books array & products will now equal our books 
    getProducts() {
        let products = store.get('products');
        // boostrap products with books if they don't exist
        if(!products) {
            store.save('products', books);
            products = books;
        } 
        return products;
    },
    // getting what is in the shopping cart, and if nothing is in there then returns empty array
    getShoppingCart() {
        let shoppingCart = store.get('shopping-cart');
        if(!shoppingCart) {
            shoppingCart = [];        
        } return shoppingCart;
    }, 
    // getting what is in the shopping cart, if there's already one of an item in there then add another one, if not add a new object, add it in to the array and save it in storage.
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
    }, 
    findBook(books, code) {
        // loop the array — finding correct book
        for(let i = 0; i < books.length; i++) {
            const book = books[i];
            // check the code against book.code
            if(book.code === code) {
                // if true return found book
                return book;
                // if false just keep going
            }
        }
        // loop done
        return null;
    },
    addProduct(product) {
        const products = this.getProducts();
        products.push(product);
        store.save('products', products);
    }, 
    getSales() {
        const sales = this.getShoppingCart();
        
        return 
    }
};

export default store;