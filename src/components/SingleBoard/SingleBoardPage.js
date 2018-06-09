import React from 'react';
import { connectToStore } from "../../store/connectStore";
import { extractActiveBoard } from './../../selectors/boardSelectors';
import BoardTitle from './BoardTitle';
import BoardLists from './BoardLists';
import { AddList } from './Lists/AddList';
import { addListToBoard } from '../../actions/boardsActions';
import { addCardToList } from './../../actions/boardsActions';

class SingleBoardPage extends React.Component {

    constructor() {
        super();

        this.onAddNewList = this.onAddNewList.bind(this);
        this.onAddCardToList = this.onAddCardToList.bind(this);
    }

    onAddNewList(list) {
        this.props.addListToBoardAction(list, this.props.board.name);
    }

    onAddCardToList(cardName, listName) {
        this.props.addCardToList(cardName, listName, this.props.board.name);
    }

    render() {
        return (
            <div>
                <BoardTitle boardName={this.props.board.name} />
                <BoardLists lists={this.props.board.lists} addCardToList={this.onAddCardToList} />
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
        },
        addCardToList(cardName, listName, boardName) {
            dispatch(addCardToList(cardName, listName, boardName))
        }
    };
}

export default connectToStore(mapStateToProps, mapDispatchToProps)(SingleBoardPage);