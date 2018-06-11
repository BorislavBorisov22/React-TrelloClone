
import PropTypes from 'prop-types';
import React from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './../../../constants/itemTypes';

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
    position: 'relative',
    left: '20px'
}

const cardSource = {
    beginDrag({ cardName }) {
        return { cardName };
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

@DragSource(ItemTypes.CARD, cardSource, collect)

class ListCard extends React.Component {

    render() {
        const { connectDragSource, isDragging, cardName } = this.props;
        return connectDragSource((
            <div style={{
                ...style,
                opacity: isDragging ? 0.5 : 1,
                cursor: ''
            }}
                className="sc-kGXeez dQRJlP">
                <h5 className="sc-kpOJdX dUecFp">{cardName}</h5>
                <div style={tickStyle} className="sc-dxgOiQ bjdCWn">✓</div>
            </div>
        ));
    }
};

ListCard.propTypes = {
    cardName: PropTypes.string.isRequired,
    connectDragSource: PropTypes.func,
    isDragging: PropTypes.bool
};

export default ListCard;