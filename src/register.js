export default function findBook(books, code) {

// loop the array — finding correct book
for(let i = 0; i < books.length; i++) {
    const book = books[i];
    // check the code against book.code
    if(book.code === code) {
        // if true return found bool
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

// eslint-disable-next-line no-unused-vars
// declare order total variable outside of loop
export function orderTotal(cart, books) {
    const total = 0;
    // loop array of cart (line items)
    for (i = 0; i < order.length; i++) {
        const shoppingCart = cart[i].code;

        // lookup the product (books)
       if(shoppingCart === )
        
        //calc line total
        let line = calcLineTotal();

        // add to order total
        total =+ line;
    }
    //return order total
    return total;
}
// 

