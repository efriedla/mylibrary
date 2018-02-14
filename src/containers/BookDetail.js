import React, {Component} from "react";
import { connect } from 'react-redux';

class BookDetail extends Component {
    render(){
        /**
         * if a book is not yet selected, default value
         */
        if(!this.props.book){
            return <div><h3>Select a book</h3><div>Any should do...</div></div>
        }
        return(
            <div>
                <h3>Book Details: </h3>
                <div>Title: {this.props.book.title}</div>
                <div>Page Count: {this.props.book.pages}</div>
            </div>
        );
    }
}
function mapStateToProps(state){
// reference activeBook from reducers/index
    return {
        book: state.activeBook
    }
}
export default connect(mapStateToProps)(BookDetail);