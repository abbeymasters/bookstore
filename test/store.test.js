import store from '../src/data/store.js';
import books from '../src/data/books.js';

const test = QUnit.test;

QUnit.module('data store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('generic get and save', assert => {
    // arrange
    const key = 'book';
    const book = { name: 'jane eyre' };

    // act
    store.save(key, book);
    const get = store.get(key);

    // assert
    assert.deepEqual(get, book);

});


test('Get Products with Bootstrapped Default', assert => {
    // arrange

    // act
    const products = store.getProducts();
    
    // assert
    assert.deepEqual(products, books);
});

test('Get Shopping Cart to Equal Empty Array', assert => {
    // arrange

    // act
    const shoppingCart = store.getShoppingCart();

    // assert
    assert.deepEqual(shoppingCart, []);

});

test('Add product to empty shopping cart', assert => {
    // arrange
    const code = 'thegonedead';
    const expected = [{ 
        code: 'thegonedead', 
        quantity: 2
    }];

    // act
    store.orderProduct(code);
    store.orderProduct(code);
    let theCart = store.getShoppingCart();

    // assert
    assert.deepEqual(theCart, expected);
});

test('getProduct(code)', (assert) => {
    // arrange
    const code = 'allthelightwecannotsee';
    const expected = books[0];

    // act
    const book = store.getProduct(code);

    // assert
    assert.deepEqual(book, expected);
});