import React, {Component} from 'react';
import { bookPropType} from './CustomPropTypes';
import PropTypes from 'prop-types';
import ShelfSelect from './ShelfSelect';
import * as Constant from './Constants';

class Book extends Component {

    handleShelfChange = (shelf) => {
        this.props.onSelectShelf(this.props.data, shelf);
    };

    render() {
        const { data } = this.props;
        let thumbnailUrl;

        if(data.imageLinks && data.imageLinks.thumbnail) {
            thumbnailUrl = data.imageLinks.thumbnail;
        } else {
            thumbnailUrl = Constant.NO_THUMBNAIL_PLACEHOLDER;
        }

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnailUrl}")` }}></div>
                        <ShelfSelect selectedValue={data.shelf} onSelectShelf={this.handleShelfChange}/>
                    </div>
                    <div className="book-title">{data.title}</div>
                    { data.authors &&
                        <div className="book-authors">{data.authors.join(', ')}</div>
                    }
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