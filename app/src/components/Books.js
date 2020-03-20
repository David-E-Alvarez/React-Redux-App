import React from 'react';
import {connect} from 'react-redux';

import {getBooks} from '../actions/actions';
import {Button} from "reactstrap";

const Books = props => {
    console.log("props.books: ", props.books)
    const fetchBooks = e => {
      e.preventDefault();
      props.getBooks();
    };
    return(
        <>
            <h1>Books!</h1>
            {props.isFetching && <p>Fetching your Books</p>}
            <div>
                {props.books.map(book => (
                    <h4 key={book.key}>{book.title}</h4>
                 ))}
             </div>
             {props.error && <p className="error">{props.error}</p>}
             <Button onClick={fetchBooks}>Fetch Books</Button>
        </>
    );
};

const mapStateToProps = state => ({
    books: state.books,
    error: state.error,
    isFetching: state.isFetching
});

export default connect(
    mapStateToProps,
    { getBooks }
  )(Books);

