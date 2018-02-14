export function selectBook(book){
    console.log("selectBook actioncreator: " + book.title);
    return({
        type:'TBD',
        book: book
    });
}