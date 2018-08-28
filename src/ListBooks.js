import React, { Component } from 'react'
import {Link} from "react-router-dom";

class ListBooks extends Component {

    render() {
        return (
            <div className="list-books">
                <div className="open-search">
                    <Link to='/search' className='add-contact'>Add a book</Link>
                </div>
            </div>

        );
    }
}

export default ListBooks;