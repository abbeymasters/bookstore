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

// declare order total variable outside of loop

    // loop array of cart (books)
        // lookup the product of book
        //calc line total
        // add to order total


        //return order total

// }

