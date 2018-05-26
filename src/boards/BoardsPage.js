import React from 'react';
import CreateNewBoard from './CreateNewBoard';
import BoardsList from './BoardsList';

class BoardsPage extends React.Component {

    constructor() {
        super();

        this.state = {
            boards: {}
        };

        this.lastBoardId = 0;
        this.onNewBoardCreate = this.onNewBoardCreate.bind(this);
    }

    onNewBoardCreate(boardName) {
        this.lastBoardId++;
        const newBoard = {
            name: boardName
        };

        this.setState((prevState) => {
            return {
                boards: {
                    ...prevState.boards,
                    [this.lastBoardId]: newBoard
                }
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Boards Page</h1>
                <CreateNewBoard onNewBoardCreate={this.onNewBoardCreate} />
                <BoardsList boards={this.state.boards} />
            </div>
        );
    }
}

export default BoardsPage;