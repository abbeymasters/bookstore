import books from '../src/data/books.js';
import foundBook from '../src/register.js';
import calcLineTotal from '../src/register.js';

const test = QUnit.test;

QUnit.module('Register');

test('Find book by code', assert => {
    // arrange
    const code = 'halfofayellowsun';
    const expected = {
        code: 'halfofayellowsun',
        name: 'Half of a Yellow Sun',
        image: 'assets/halfofayellowsun.png',
        description: 'A seminal moment in modern African history: Biafra’s impassioned struggle to establish an independent republic in Nigeria.',
        category: 'fiction',
        price: 16.00,
        cost: 8.50
    };

    // act
    const newBook = foundBook(books, code);
    
    // assert
    assert.deepEqual(newBook, expected);
});

// testing calculations

test('register calculations', assert => {
    // arrange
    const quantity = 3;
    const price = 16.00;
    const expected = 48.00;

    // act
    const total = calcLineTotal(quantity, price);
  
    
    // assert
    assert.deepEqual(total, expected);
});
