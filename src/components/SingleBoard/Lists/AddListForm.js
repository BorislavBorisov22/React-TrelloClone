
import React from 'react';
import Input from './../../Common/Input';
import PropTypes from 'prop-types';

class AddListForm extends React.Component {

    constructor() {
        super();

        this.state = {
            list: {
                name: '',
                cards: []
            },
            errors: {}
        };

        this.onNewListNameChange = this.onNewListNameChange.bind(this);
        this.onAddNewListSubmit = this.onAddNewListSubmit.bind(this);
    }

    onNewListNameChange(ev) {
        const value = ev.target ? ev.target.value : '';

        this.setState((prevState) => {
            return {
                list: {
                    ...prevState.list,
                    name: value
                }
            };
        });
    }

    onAddNewListSubmit(ev) {
        ev.preventDefault();

        if (!(this.state.list && this.state.list.name.trim() !== '')) {
            this.setState({
                errors: {
                    listName: 'give me a name, please!'
                }
            });

            return;
        }

        this.props.onSubmit(this.state.list);
    }

    render() {
        return (
            <div className="sc-kgoBCf bYcqkD">
                <form onSubmit={this.onAddNewListSubmit}>
                    <label>
                        <Input
                            value={this.state.list.name}
                            error={this.state.errors.listName}
                            onChange={this.onNewListNameChange}
                        />
                    </label>
                </form>
                <div className="sc-kAzzGY dbmEVi"><svg onClick={this.props.closeForm} className="sc-chPdSV eomhGf"></svg>
                </div>
            </div>
        )
    }
}

AddListForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    closeForm: PropTypes.func.isRequired
};

export default AddListForm;