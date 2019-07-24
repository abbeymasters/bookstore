import books from '../src/data/books.js';
import findBook from '../src/register.js';
import { calcLineTotal } from '../src/register.js';
import { orderTotal } from '../src/register.js';
import cart from '../src/data/order.js';

const test = QUnit.test;

QUnit.module('Register');

test('Find book by code', assert => {
    // arrange
    const code = 'theunhoneymooners';
    const expected = {
        code: 'theunhoneymooners',
        name: 'The Unhoneymooners',
        image: 'assets/TheUnhoneymooners.png',
        description: 'Olive braces herself to get through 24 hours of wedding hell before she can return to her comfortable, unlucky life.',
        category: 'Romance',
        price: 14.85,
        cost: 8.90
    };

    // act
    const newBook = findBook(books, code);
    
    // assert
    assert.deepEqual(newBook, expected);
});

// testing line item calculations

test('testing calculations', assert => {
    // arrange
    const quantity = 3;
    const price = 16;
    const expected = 48;

    // act
    const total = calcLineTotal(quantity, price);
    
    // assert
    assert.equal(total, expected);
});
  
test('testing order total', assert => {
    // arrange
    
    const expected = 144.90;

    // act
    const finalTotal = orderTotal(cart, books);

    
    // assert
    assert.equal(finalTotal, expected);
});
