import React, { Component } from 'react'
import {Link} from "react-router-dom";
import * as BooksAPI from '../BooksAPI';
import { debounce } from "debounce";
import PropTypes from "prop-types";
import {bookPropType} from "../CustomPropTypes";
import ListBooks from "./ListBooks";
import Bookshelf from "./Bookshelf";

class SearchBooks extends Component {

    state = {
        searchResults: []
    };

    handleSearch = debounce((query) => {
        if(query === '') {
            this.setState({
                searchResults: []
            });
        } else {
            BooksAPI.search(query.trim())
                .then((results) => {
                    if (!Array.isArray(results)) {
                        results = [];
                    }

                    results.forEach(searchResultBook => {
                        const book = this.props.books.find(book => book.id === searchResultBook.id);
                        if (book) {
                            searchResultBook.shelf = book.shelf;
                        }
                    });

                    this.setState({
                        searchResults: results
                    });
                });
        }
    }, 200);

    render() {
        const { searchResults } = this.state;
        const { onSelectShelf } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(event) => this.handleSearch(event.target.value)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <Bookshelf books={searchResults} onSelectShelf={onSelectShelf}/>
                    </ol>
                </div>
            </div>
        );
    }
}

ListBooks.propTypes = {
    books: PropTypes.arrayOf(bookPropType).isRequired,
    onSelectShelf: PropTypes.func.isRequired
};

export default SearchBooks;