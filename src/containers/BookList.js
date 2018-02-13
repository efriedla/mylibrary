import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li class="list-group-item" key={book.title}>{book.title}</li>
            );
        });
    }
    render() {
        return(
            <ul class="list-group">
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

export default connect(mapStateToProps)(BookList);