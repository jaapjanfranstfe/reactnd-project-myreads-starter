import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

import './App.css'

class BooksApp extends Component {
    state = {
        shelves: []
    };

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                const current = {
                    id: "currentlyReading",
                    title: "Currently Reading",
                    books: books.filter((book) => book.shelf === "currentlyReading")
                };

                const want = {
                    id: "wantToRead",
                    title: "Want to Read",
                    books: books.filter((book) => book.shelf === "wantToRead")
                };

                const read = {
                    id: "read",
                    title: "Read",
                    books: books.filter((book) => book.shelf === "read")
                };

                this.setState(() => ({
                    shelves: [current, want, read]
                }));
            })
    }

    render() {
    return (
        <div className="app">
            <Route exact path='/' render={() => (
                <ListBooks shelves={this.state.shelves} />
            )}/>
            <Route path='/search' render={() => (
                <SearchBooks/>
            )}/>
        </div>
    )
    }
}

export default BooksApp
