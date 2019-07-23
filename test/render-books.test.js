import renderBooks from '/src/render-books.js';

const test = QUnit.test;

QUnit.module('Render Book');

test('renders a book', assert => {
    // arrange
    const yellowSun = {
        code: 'yellowsun',
        name: 'Half of a Yellow Sun',
        image: 'assets/halfofayellowsun.png',
        description: 'A a seminal moment in modern African history: Biafra’s impassioned struggle to establish an independent republic in Nigeria.',
        category: 'fiction',
        price: 16.00,
        cost: 8.50
    };
    
    const expected = '<li></li>';

    // act
    const dom = renderBooks(yellowSun);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});