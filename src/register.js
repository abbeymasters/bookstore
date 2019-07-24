export default function findBook(books, code) {
 
// loop the array — finding correct book
for(let i = 0; i < books.length; i++) {
    const book = books[i];
    // check the code against book.code
    if(book.code === code) {
        // if true return found book
    return book;
        // if false just keep going
     }
    }
// loop done
    return null;
}

// line total function
export function calcLineTotal(price, quantity) {
    return Number((price * quantity).toFixed(2));
}


// declare order total variable outside of loop
export function orderTotal(cart, books) {
    let total = 0;
    // loop array of cart (line items)
    for (let i = 0; i < cart.length; i++) {
        //eslint-disable-next-line no-unused-vars
        let shoppingCart = cart[i].code;
        const book = books[i];

        // lookup the product (books)
       if(shoppingCart = book.code) {
           findBook(books, 'code');
           let newPrice = book.price; 

        //calc line total
        let line = calcLineTotal(cart.quantity, newPrice);

        // add to order total
        total =+ line;
    }
    //return order total
    return total;
}}
//