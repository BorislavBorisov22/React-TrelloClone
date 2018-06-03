import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, onChange, error }) => {
    return (
        <div>
            <input value={value} onChange={onChange} />
            {error && <p className="error">{error}</p>}
        </div>
    );
};

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default Input;