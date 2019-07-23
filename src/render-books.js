function renderBooks(book) {
    const li = document.createElement('li');
    li.className = book.category;
    li.title = book.description;

    const h3 = document.createElement('h3');
    h3.textContent = book.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = book.image;
    img.alt = book.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = book.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    // p.textContent = usd;
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = book.code;
    p.appendChild(button);

    li.appendChild(p);
    return li;

};

export default renderBooks;