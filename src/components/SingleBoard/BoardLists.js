
import React from 'react';
import PropTypes from 'prop-types';
import List from './Lists/List';

const BoardLists = ({ lists }) => {
    return (
        <div>
            {(lists.map(l => (<List list={l} key={l.name} />)))}
        </div>
    );
};

BoardLists.propTypes = {
    lists: PropTypes.array.isRequired
};

export default BoardLists;