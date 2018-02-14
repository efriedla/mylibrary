import React, {Component} from 'react';
import { connect } from 'react-redux'; /** connection between BookList and state, turned BookList from a conponent to container */
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title}
                    className="list-group-item" 
                    onClick={()=> this.props.selectBook(book)}
                    >
                    {book.title}
                </li>
            );
        });
    }
    render() {
        return(
            <ul className="list-group">
                {this.renderList()}
            </ul>
        )
    }
}
function mapStateToProps(state){
    // show up as props in BookList
    // if state changes this state will rerender
    return {
        books: state.books
    }
}
// whats returned will show up on BookList container
function mapDispatchToProps(dispatch){
    // when book is called should be passed on to all reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}
//exports both this classes and functions
export default connect(mapStateToProps, mapDispatchToProps)(BookList);