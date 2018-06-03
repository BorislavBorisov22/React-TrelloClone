
import React from 'react';
import { connectToStore, bindActionCreators } from '../../store/connectStore';
import * as boardsActions from './../../actions/boardsActions';


class BoardsPage extends React.Component {


    render() {
        console.log(this.props, 'propsa brat');
        const newBoard = () => {
            this.props.boardActions.addNewBoard({ name: 'someboardname' });
        };

        return (
            <div>
                <h1>Boards Page {JSON.stringify(this.props.boards)}</h1>
                <button onClick={newBoard}>Add Board</button>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        boards: state.boards
    };
}

function mapDispatchToProps(dispatch) {
    return {
        boardActions: bindActionCreators(Object.assign({}, boardsActions), dispatch)
    }
}

export default connectToStore(mapStateToProps, mapDispatchToProps)(BoardsPage);