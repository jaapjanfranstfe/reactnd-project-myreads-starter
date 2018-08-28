import React, {Component} from 'react';

class Book extends Component {

    render() {
        const { data } = this.props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        // TODO: create separate component for book cover that also has a default placeholder if image not available
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${data.imageLinks.thumbnail}")` }}></div>
                        // TODO create book shelf changer component
                        <div className="book-shelf-changer">
                            <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{data.title}</div>
                    <div className="book-authors">{data.authors.join(', ')}</div>
                </div>
            </li>
        );
    }
}

export default Book;