import React from 'react';
import { connectToStore } from "../../store/connectStore";
import { extractActiveBoard } from './../../selectors/boardSelectors';
import BoardTitle from './BoardTitle';
import BoardLists from './BoardLists';
import { AddList } from './Lists/AddList';
import { addListToBoard } from '../../actions/boardsActions';

class SingleBoardPage extends React.Component {

    constructor() {
        super();

        this.onAddNewList = this.onAddNewList.bind(this);
    }

    onAddNewList(list) {
        this.addListToBoardAction(list, this.props.board.name);
    }

    render() {
        return (
            <div>
                <BoardTitle boardName={this.props.board.name} />
                <BoardLists lists={this.props.board.lists} />
                <AddList boardName={this.props.board.name} onAddNewList={this.onAddNewList} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const activeBoard = extractActiveBoard(state.boards, ownProps.match.params.boardName);

    return {
        board: activeBoard || {}
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addListToBoardAction(list, boardName) {
            dispatch(addListToBoard(list, boardName));
        }
    };
}

export default connectToStore(mapStateToProps)(SingleBoardPage);