import React from 'react';
import CreateBoardForm from './CreateBoardForm';

class CreateNewBoard extends React.Component {

    constructor() {
        super();

        this.state = {
            displayNewBoardForm: false
        };

        this.showCreateNewboardForm = this.showCreateNewboardForm.bind(this);
        this.onNewBoardCancel = this.onNewBoardCancel.bind(this);
        this.onNewBoardCreate = this.onNewBoardCreate.bind(this);
    }

    showCreateNewboardForm() {
        if (!this.state.displayNewBoardForm) {
            this.setState({
                displayNewBoardForm: true
            });
        }
    }

    onNewBoardCancel() {
        this.setState({
            displayNewBoardForm: false
        });
    }

    onNewBoardCreate(boardName) {
        this.props.onNewBoardCreate(boardName);
        this.setState({
            displayNewBoardForm: false
        });
    }

    render() {
        return (
            <div onClick={this.showCreateNewboardForm}>
                {
                    !this.state.displayNewBoardForm
                        ? 'Create a new board...'
                        : <div>
                            Creating New Board
                            <CreateBoardForm
                                onCancelCreate={this.onNewBoardCancel}
                                onNewBoardCreate={this.onNewBoardCreate}
                            />
                        </div>
                }
            </div>
        );
    }
}

export default CreateNewBoard;