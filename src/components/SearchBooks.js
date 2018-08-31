import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import PropTypes from "prop-types";
import {bookPropType} from "../CustomPropTypes";
import ListBooks from "./ListBooks";
import Bookshelf from "./Bookshelf";
import Searchbar from "./Searchbar";

class SearchBooks extends Component {

    state = {
        searchResults: []
    };

    handleSearch = (query) => {
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

                    // make sure search results books that are already on a shelf of the user
                    // get updated with the same shelf
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
    };

    render() {
        const { searchResults } = this.state;
        const { onSelectShelf } = this.props;
        return (
            <div className="search-books">
                <Searchbar onQueryChanged={this.handleSearch} />
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