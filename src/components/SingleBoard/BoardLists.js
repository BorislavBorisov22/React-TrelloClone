
import React from 'react';
import PropTypes from 'prop-types';
import List from './Lists/List';

const BoardLists = ({ lists, addCardToList }) => {
    return (
        <div>
            {(lists.map(l => (<List list={l} key={l.name} addCard={addCardToList} />)))}
        </div>
    );
};

BoardLists.propTypes = {
    lists: PropTypes.array.isRequired,
    addCardToList: PropTypes.func.isRequired
};

export default BoardLists;