
import React from 'react';
import Input from './../Common/Input';
import PropTypes from 'prop-types';

export class AddBoardForm extends React.Component {
    constructor() {
        super();

        this.state = {
            errors: {},
            board: {
                name: '',
                lists: []
            }
        }

        this.onBoardNameChange = this.onBoardNameChange.bind(this);
        this.onCreate = this.onCreate.bind(this);
    }

    onBoardNameChange(ev) {
        const boardName = ev.target.value;
        this.setState((prevState) => {
            return {
                board: {
                    ...prevState.board,
                    name: boardName
                }
            };
        });
    }

    onCreate(ev) {
        ev.preventDefault();

        if (!(this.state.board && this.state.board.name)) {
            this.setState({
                errors: {
                    boardName: 'Ooops! Looks like you forgot to enter a name'
                }
            });
            return;
        }

        this.props.onCreate(this.state.board);
    }

    onAddNew

    render() {
        return (
            <div>
                <div className="sc-htoDjs hdswki">
                    <h5 className="sc-dnqmqq drKaqf">What shall we call the board?</h5>
                    <div>
                        <form onSubmit={this.onCreate}>
                            <label>
                                <Input
                                    onChange={this.onBoardNameChange}
                                    value={this.state.board.name}
                                    error={this.state.errors.boardName}
                                />
                            </label>
                        </form>
                        <div className="sc-bxivhb hfjVaS">
                            <button onClick={this.props.onCancel} className="sc-htpNat bNrnZp">Cancel</button>
                            <button onClick={this.onCreate} className="sc-ifAKCX dGUCUV" type="button">Create</button>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

AddBoardForm.propTypes = {
    onCreate: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

export default AddBoardForm;