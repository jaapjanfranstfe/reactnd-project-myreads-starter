import {Component} from "react";
import {Link} from "react-router-dom";
import React from "react";
import {debounce} from "debounce";
import PropTypes from "prop-types";

class Searchbar extends Component {

    handleQuery = debounce((query) => {
        this.props.onQueryChanged(query);
    }, 200);

    render() {
        return (
            <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={(event) => this.handleQuery(event.target.value)}/>
                </div>
            </div>
        );
    }
}

Searchbar.propTypes = {
    onQueryChanged: PropTypes.func.isRequired
};

export default Searchbar;