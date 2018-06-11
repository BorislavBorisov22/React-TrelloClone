
import PropTypes from 'prop-types';
import React from 'react';

const style = {
    opacity: 1,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 6px 6px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
    textDecoration: 'none',
    backgroundColor: 'rgb(202, 255, 222)',
    padding: '0',
    fontSize: '14px'
};

const tickStyle = {
    marginTop: '12px',
    position: 'absolute',
    right: '20px'
}

const ListCard = ({ cardName }) => {
    return (
        <div className="sc-kGXeez dQRJlP" style={style}>
            <h5 className="sc-kpOJdX dUecFp">{cardName}</h5>
            <div style={tickStyle} className="sc-dxgOiQ bjdCWn">✓</div>
        </div>
    );
};

ListCard.propTypes = {
    cardName: PropTypes.string.isRequired
};

export default ListCard;