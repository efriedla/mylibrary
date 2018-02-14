/**
 * select book
 * does something
 */
export function selectBook(book){
    console.log("selectBook actioncreator: " + book.title);
    return({
        type:'Book_Selected',
        book: book
    });
}