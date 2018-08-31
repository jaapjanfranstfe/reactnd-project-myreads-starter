import PropTypes from 'prop-types';

export const imageLinksPropType = PropTypes.shape({
    smallThumbnail: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
});

export const bookPropType = PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageLinks: imageLinksPropType.isRequired,
    shelf: PropTypes.string.isRequired
});



