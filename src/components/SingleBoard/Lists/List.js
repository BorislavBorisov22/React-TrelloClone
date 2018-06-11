
import React from 'react';
import PropTypes from 'prop-types';
import Input from './../../Common/Input';
import ListCard from './ListCard';
import { DropTarget } from 'react-dnd';
import ItemTypes from './../../../constants/itemTypes';

const dropSource = {
    drop(props, monitor) {
        const card = monitor.getItem();
        props.addCard(card.cardName, props.list.name);
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        canDrop: monitor.canDrop(),
    };
}

@DropTarget(ItemTypes.CARD, dropSource, collect)

class List extends React.Component {

    constructor(props, ctx) {
        super(props, ctx);

        this.state = {
            cardNameToAdd: ''
        };

        this.onCardNameInputChange = this.onCardNameInputChange.bind(this);
    }

    onCardNameInputChange(ev) {
        this.setState({
            cardNameToAdd: ev.target.value
        })
    }

    render() {
        const { list, connectDropTarget } = this.props;

        return connectDropTarget((
            <div className="sc-ckVGcZ pzoVb">
                <h4 className="sc-jKJlTe ldRhSy">{list.name}</h4>
                <hr />
                <div>
                    <form onSubmit={(ev) => {
                        ev.preventDefault();
                        this.props.addCard(this.state.cardNameToAdd, list.name);
                        this.setState({
                            cardNameToAdd: ''
                        });
                    }}>
                        <label>
                            <label>
                                <Input value={this.state.cardNameToAdd} onChange={this.onCardNameInputChange} />
                            </label>
                        </label>
                    </form>
                    {list.cards && list.cards.map(c => <ListCard key={c} cardName={c} />)}
                </div>
            </div>
        ));
    }
}

List.propTypes = {
    list: PropTypes.object.isRequired,
    addCard: PropTypes.func.isRequired
};

export default List;