import React from 'react';
import { connectToStore } from "../../store/connectStore";
import { extractActiveBoard } from './../../selectors/boardSelectors';
import BoardTitle from './BoardTitle';

class SingleBoardPage extends React.Component {

    render() {
        return (
            <div>
                <BoardTitle boardName={this.props.board.name} />
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

export default connectToStore(mapStateToProps)(SingleBoardPage);