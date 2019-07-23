export function foundBook(books, code) {

// loop the array
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


export default foundBook;