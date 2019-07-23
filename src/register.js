
export default foundBook;
export function foundBook(books, code) {

// loop the array — finding correct book
for(let i = 0; i < books.length; i++) {
    const book = books[i];
    // check the code against book.code
    if(book.code === code) {
        // if true return found bool
    return book;
        // if false just keep going
    }
// loop done
    return null;
}}

export function calcLineTotal(quantity, price) {
    return (quantity * price).toFixed(2);
}

export function calcOrderTotal(cart, books) {


// declare order total variable outside of loop

    // loop array of cart (books)
        // lookup the product of book
        //calc line total
        // add to order total


        //return order total

}

