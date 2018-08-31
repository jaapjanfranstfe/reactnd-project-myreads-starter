import React, {Component} from 'react';
import Book from './Book';
import { bookPropType } from "../CustomPropTypes";
import PropTypes from "prop-types";

class Bookshelf extends Component {

    render() {
        const { title, books, onSelectShelf } = this.props;
        const sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));

        return (
            <div className="bookshelf">
                {title &&
                    <h2 className="bookshelf-title">{title}</h2>
                }

                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {sortedBooks.map((book) => (
                            <Book key={book.id} data={book} onSelectShelf={onSelectShelf}/>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

Bookshelf.propTypes = {
    title: PropTypes.string,
    books: PropTypes.arrayOf(bookPropType).isRequired,
    onSelectShelf: PropTypes.func.isRequired
};

export default Bookshelf;