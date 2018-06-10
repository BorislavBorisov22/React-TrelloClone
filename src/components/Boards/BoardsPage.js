
import React from 'react';
import { connectToStore, bindActionCreators } from '../../store/connectStore';
import * as boardsActions from './../../actions/boardsActions';
import AddBoard from './AddBoard';
import BoardsList from './BoardsList';

class BoardsPage extends React.Component {

    constructor() {
        super();

        this.addNewBoard = this.addNewBoard.bind(this);
    }

    addNewBoard(board) {
        this.props.boardActions.addNewBoard(board);
    }

    render() {
        return (
            <div>
                <AddBoard addNewBoard={this.addNewBoard} />
                <BoardsList boards={this.props.boards} />
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