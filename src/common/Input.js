
import React from 'react';

const Input = ({ onChange, value, error }) => {
    return (
        <div>
            <input
                value={value}
                onChange={onChange}
            />
            {error && (<div>{error}</div>)}
        </div>
    );
};

export default Input;