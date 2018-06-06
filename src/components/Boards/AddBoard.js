
import React from 'react';
import PropTypes from 'prop-types';
import { AddBoardForm } from './AddBoardForm';

class AddBoard extends React.Component {

    constructor() {
        super();

        this.state = {
            newBoardFormVisible: false
        };

        this.toggleNewBoardForm = this.toggleNewBoardForm.bind(this);
        this.onCreateNewBoardDivClicked = this.onCreateNewBoardDivClicked.bind(this);
    }

    toggleNewBoardForm() {
        this.setState((prevState) => {
            return {
                newBoardFormVisible: !prevState.newBoardFormVisible
            };
        });
    }

    onCreateNewBoardDivClicked() {
        if (this.state.newBoardFormVisible) {
            return;
        }

        this.toggleNewBoardForm();
    }

    render() {
        return (
            <div onClick={this.onCreateNewBoardDivClicked} className="createNewBoardCard">
                {!this.state.newBoardFormVisible &&
                    <div>
                        <div>
                            <h3 className="sc-bwzfXH geDKqP">Create a new board...</h3>
                        </div>
                    </div>
                }
                {this.state.newBoardFormVisible &&
                    <div className="sc-bZQynM dBAoMo">
                        <h3 className="sc-EHOje cHtzYU">Creating a board</h3>
                        <img onClick={this.toggleNewBoardForm} className="sc-gzVnrw gdtwMV" alt="x icon" src="https://trello-copy-ddiaorohmd.now.sh/static/media/closeIcon.e5ef77f2.svg" />
                    </div>
                }
                {this.state.newBoardFormVisible &&
                    <AddBoardForm onCancel={this.toggleNewBoardForm} onCreate={(board) => {
                        this.props.addNewBoard(board);
                        this.toggleNewBoardForm();
                    }} />
                }
            </div>
        );
    }
}

AddBoard.propTypes = {
    addNewBoard: PropTypes.func.isRequired
};

export default AddBoard;