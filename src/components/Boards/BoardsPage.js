
import React from 'react';
import { connectToStore } from '../../store/connectStore';

class BoardsPage extends React.Component {

    render() {
        return (
            <h1>Boards Page {JSON.stringify(this.props.boards)}</h1>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        boards: state.boards
    };
}

export default connectToStore(mapStateToProps)(BoardsPage);