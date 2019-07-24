import store from '../src/data/store.js';
import books from '../src/data/books.js';

const test = QUnit.test;

QUnit.module('data store');

store.storage.clear;

QUnit.testStart(() => {
    store.storage = window.sessionStorage;
});

test('get and save', assert => {
    // arrange
    const key = 'cat';
    const cat = { name: 'felix' };

    // act
    store.save(key, cat);
    const got = store.get(key);

    // assert
    assert.deepEqual(got, cat);

});


test('getting product and retur bootstrapped data', assert => {
    // arrange
    
    // act
    const products = store.getProducts();

    
    // assert
    assert.deepEqual(products, books);
});