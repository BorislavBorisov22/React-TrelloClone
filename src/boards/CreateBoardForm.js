
import React from 'react';
import Input from './../common/Input';

const boardNameErrorMessage = 'Oops, Looks like you forgot a name!';

class CreateBoardForm extends React.Component {

    constructor() {
        super();

        this.state = {
            boardName: '',
            error: null
        };

        this.onBoardNameValueChange = this.onBoardNameValueChange.bind(this);
        this.validateBoardName = this.validateBoardName.bind(this);
        this.onCreateNewBoard = this.onCreateNewBoard.bind(this);
    }

    validateBoardName(boardName) {
        return !boardName || boardName.trim() === '' ? boardNameErrorMessage : null;
    }

    onBoardNameValueChange(ev) {
        const boardName = ev.target.value;

        this.setState({
            boardName
        });
    }

    onCreateNewBoard() {
        const error = this.validateBoardName(this.state.boardName);
        if (error) {
            this.setState({
                error
            });

            return;
        }

        this.props.onNewBoardCreate(this.state.boardName);
    }

    render() {
        return (
            <div>
                <Input
                    onChange={this.onBoardNameValueChange}
                    error={this.state.error}
                    value={this.state.boardName}
                />
                <button onClick={this.props.onCancelCreate}>Cancel</button>
                <button onClick={this.onCreateNewBoard}>Create Board</button>
            </div>
        );
    }
}

export default CreateBoardForm;