import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Bookshelf from "./Bookshelf";

class ListBooks extends Component {

    render() {
        const { shelves } = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map((shelf) => (
                            <Bookshelf key={shelf.id} title={shelf.title} books={shelf.books}/>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search' className='add-contact'>Add a book</Link>
                </div>
            </div>

        );
    }
}

export default ListBooks;