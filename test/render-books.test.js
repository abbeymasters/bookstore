import renderBooks from '/src/render-books.js';

const test = QUnit.test;

QUnit.module('Render Book');

test('renders a book', assert => {
    // arrange
    const yellowSun = {
        code: 'halfofayellowsun',
        name: 'Half of a Yellow Sun',
        image: 'assets/halfofayellowsun.png',
        description: 'A seminal moment in modern African history: Biafra’s impassioned struggle to establish an independent republic in Nigeria.',
        category: 'fiction',
        price: 16.00,
        cost: 8.50
    };
    
    const expected = '<li class="fiction" title="A seminal moment in modern African history: Biafra’s impassioned struggle to establish an independent republic in Nigeria."><h3>Half of a Yellow Sun</h3><img src="assets/halfofayellowsun.png" alt="Half of a Yellow Sun image"><p class="price">$16.00<button value="halfofayellowsun">Add</button></p></li>';

    // act
    const dom = renderBooks(yellowSun);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});