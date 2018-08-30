import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as Constant from './Constants';

import './App.css'

class BooksApp extends Component {
    state = {
        books: []
    };

    handleShelfChange = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then(() => {
                this.setState((prevState) => {
                    const filteredBooks = prevState.books.filter(listedBook => listedBook.id !== book.id);

                    if(shelf !== Constant.SHELF_ID_NONE) {
                        const bookCopy = {
                            ...book,
                            shelf: shelf};

                        filteredBooks.push(bookCopy);
                    }

                    return {
                        books: filteredBooks
                    };
                });
            });
    };

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books: books
                }));
            })
    }

    render() {

        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <ListBooks books={this.state.books} onSelectShelf={this.handleShelfChange}/>
                )}/>
                <Route path='/search' render={() => (
                    <SearchBooks/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
