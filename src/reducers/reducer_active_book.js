/**
 * 
 * @param {*} state argument is not application state, only the state
 * state has to have defaul of null for redux cannot be undefined
 * case is the type in action index
 * book is the book in action index
 * @param {*} action 
 */
export default function(state = null, action){
    switch(action.type){
        case 'Book_Selected':
        return action.book
    }
    return state
}