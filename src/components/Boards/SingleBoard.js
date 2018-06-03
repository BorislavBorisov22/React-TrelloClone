import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const SingleBoard = ({ board }) => {
    return (
        <Link to={`/boards/${board.name}`}>
            <div className="sc-gZMcBi UIKfr">
                <h2 className="sc-iwsKbI gofEix">{board.name}</h2>
            </div>
        </Link>
    );
};

SingleBoard.propTypes = {
    board: PropTypes.object.isRequired
};

export default SingleBoard;