
import React from 'react';
import PropTypes from 'prop-types';

const BoardLists = ({ lists }) => {
    return (
        <div>
            {(lists.map(l => l.name))}
        </div>
    );
};

BoardLists.propTypes = {
    lists: PropTypes.array.isRequired
};

export default BoardLists;