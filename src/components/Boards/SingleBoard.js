import React from 'react';
import PropTypes from 'prop-types';

const SingleBoard = ({ board }) => {
    return (
        <a href={`/boards/${board.name}`}>
            <div className="sc-gZMcBi UIKfr">
                <h2 className="sc-iwsKbI gofEix">{board.name}</h2>
            </div>
        </a>
    );
};

SingleBoard.propTypes = {
    board: PropTypes.object.isRequired
};

export default SingleBoard;