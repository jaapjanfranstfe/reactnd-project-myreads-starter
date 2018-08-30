import React, {Component} from 'react';
import { bookPropType} from './CustomPropTypes';
import PropTypes from 'prop-types';
import ShelfSelect from './ShelfSelect';

class Book extends Component {

    handleShelfChange = (shelf) => {
        this.props.onSelectShelf(this.props.data, shelf);
    };

    render() {
        const { data } = this.props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        {/* TODO: create separate component for book cover that also has a default placeholder if image not available */}
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${data.imageLinks.thumbnail}")` }}></div>
                        <ShelfSelect selectedValue={data.shelf} onSelectShelf={this.handleShelfChange}/>
                    </div>
                    <div className="book-title">{data.title}</div>
                    <div className="book-authors">{data.authors.join(', ')}</div>
                </div>
            </li>
        );
    }
}

Book.propTypes = {
    data: bookPropType,
    onSelectShelf: PropTypes.func.isRequired
};

export default Book;