import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Bookshelf from './Bookshelf';
import PropTypes from 'prop-types';
import { bookPropType } from '../CustomPropTypes';
import * as Constant from '../Constants';

class ListBooks extends Component {

    render() {
        const { books, onSelectShelf } = this.props;

        const current = {
            id: Constant.SHELF_ID_CURRENTLY_READING,
            title: Constant.SHELF_TITLE_CURRENTLY_READING,
            books: books.filter((book) => book.shelf === Constant.SHELF_ID_CURRENTLY_READING)
        };

        const want = {
            id: Constant.SHELF_ID_WANT_TO_READ,
            title: Constant.SHELF_TITLE_WANT_TO_READ,
            books: books.filter((book) => book.shelf === Constant.SHELF_ID_WANT_TO_READ)
        };

        const read = {
            id: Constant.SHELF_ID_READ,
            title: Constant.SHELF_TITLE_READ,
            books: books.filter((book) => book.shelf === Constant.SHELF_ID_READ)
        };

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf title={current.title} books={current.books} onSelectShelf={onSelectShelf}/>
                        <Bookshelf title={want.title} books={want.books} onSelectShelf={onSelectShelf}/>
                        <Bookshelf title={read.title} books={read.books} onSelectShelf={onSelectShelf}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search' className='add-contact'>Add a book</Link>
                </div>
            </div>

        );
    }
}

ListBooks.propTypes = {
    books: PropTypes.arrayOf(bookPropType).isRequired,
    onSelectShelf: PropTypes.func.isRequired
};

export default ListBooks;