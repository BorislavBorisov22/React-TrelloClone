import React from 'react';
import PropTypes from 'prop-types';
import SingleBoard from './SingleBoard';

const BoardsList = ({ boards }) => {
    return (
        <div>
            {boards.map(b => <SingleBoard key={b.name} board={b} />)}
        </div>
    );
};

BoardsList.propTypes = {
    boards: PropTypes.array.isRequired
};

export default BoardsList;