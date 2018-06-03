import React from 'react';
import PropTypes from 'prop-types';

const boardTitleStyles = {
    width: '400px'
};

const BoardTitle = ({ boardName }) => {
    return (
        <div style={boardTitleStyles} className="sc-VigVT kzbxDW">
            <h1 className="sc-jTzLTM icVHFD">{boardName}</h1>
        </div>
    );
};

BoardTitle.propTypes = {
    boardName: PropTypes.string.isRequired
};

export default BoardTitle;