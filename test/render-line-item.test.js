import renderLineItem from '../src/render-line-item.js';
import findBook from '../src/register.js';
import books from '../src/data/books.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders line item', assert => {
    // arrange
    const lineItem = {
        code: 'halfofayellowsun',
        quantity: 3
    };

    const halfofayellowsun = findBook(books, lineItem.code);
    const expected = '<tr><td>3</td><td>Half of a Yellow Sun</td><td>$16.00</td><td class="line-item-total">$48.00</td></tr>';

    // act
    const dom = renderLineItem(lineItem, halfofayellowsun);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);

});