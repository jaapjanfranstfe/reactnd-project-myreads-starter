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
                    const books = prevState.books.filter(listedBook => listedBook.id !== book.id);


                    if(shelf !== Constant.SHELF_ID_NONE) {
                        book.shelf = shelf;
                        books.push(book);
                    }

                    return {
                        books: books
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
