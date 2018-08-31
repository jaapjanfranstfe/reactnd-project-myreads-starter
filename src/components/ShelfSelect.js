import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Constant from '../Constants';

class ShelfSelect extends Component {

    handleValueChange = (event) => {
        this.props.onSelectShelf(event.target.value);
    };

    render() {
        let {selectedValue} = this.props;

        if(!selectedValue) {
            selectedValue = Constant.SHELF_ID_NONE;
        }
        return (
            <div className="book-shelf-changer">
                <select defaultValue={selectedValue} onChange={this.handleValueChange}>
                    <option value={Constant.SHELF_ID_CURRENTLY_READING}>{Constant.SHELF_TITLE_CURRENTLY_READING}</option>
                    <option value={Constant.SHELF_ID_WANT_TO_READ}>{Constant.SHELF_TITLE_WANT_TO_READ}</option>
                    <option value={Constant.SHELF_ID_READ}>{Constant.SHELF_TITLE_READ}</option>
                    <option value={Constant.SHELF_ID_NONE}>{Constant.SHELF_TITLE_NONE}</option>
                </select>
            </div>
        );
    }
}

ShelfSelect.propTypes = {
    selectedValue: PropTypes.string,
    onSelectShelf: PropTypes.func.isRequired
};

export default ShelfSelect;