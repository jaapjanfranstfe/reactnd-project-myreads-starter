import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

import './App.css'

class BooksApp extends Component {
  state = {
    shelves: {
        currentlyReading: [],
        wantToRead: [],
        read: []
    }
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
