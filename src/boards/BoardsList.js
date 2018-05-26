
import React from 'react';

const BoardsList = ({ boards }) => {
    return (
        <h1>Boards Added - {Object.values(boards).map(b => b.name).join(' | ')}</h1>
    );
};

export default BoardsList;