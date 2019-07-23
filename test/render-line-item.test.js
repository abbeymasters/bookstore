import renderBooks from '/src/render-books.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders line item', assert => {
    // arrange

    // act
    const dom = renderLineItem(lineItem, yellowSun)
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});