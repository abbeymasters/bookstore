import sales from '../src/data/sales.js';
import store from '../src/data/store.js';

const test = QUnit.test;

QUnit.module('Sales Page');

test('returns an empty array if key does not exist', assert => {
    // arrange
    const key = 'blank';
    const expected = [];
    // act
    const getSales = store.getSales(key);

    // assert
    assert.equal(getSales, expected);
});