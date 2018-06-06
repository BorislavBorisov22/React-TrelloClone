
import React from 'react';
import PropTypes from 'prop-types';
import AddListForm from './AddListForm';

export class AddList extends React.Component {

    constructor() {
        super();

        this.state = {
            addListFormVisible: false
        };

        this.toggleAddListForm = this.toggleAddListForm.bind(this);
        this.onAddListCardClick = this.onAddListCardClick.bind(this);
    }

    toggleAddListForm() {
        this.setState((prevState) => {
            return {
                addListFormVisible: !prevState.addListFormVisible
            };
        });
    }

    onAddListCardClick() {
        if (!this.state.addListFormVisible) {
            this.toggleAddListForm();
        }
    }

    render() {
        return (
            <div onClick={this.onAddListCardClick}>
                {!this.state.addListFormVisible &&
                    <div className="sc-jzJRlG kcGAOi">
                        <h4 className="sc-cSHVUG hRebLv">Add a list...</h4>
                    </div>
                }
                {this.state.addListFormVisible &&
                    <AddListForm onSubmit={(list, boardName) => {
                        this.props.onAddNewList(list, boardName);
                        this.toggleAddListForm();
                    }}

                        closeForm={this.toggleAddListForm}
                    />
                }
            </div>
        );
    }
}

AddList.propTypes = {
    boardName: PropTypes.string.isRequired,
    onAddNewList: PropTypes.func.isRequired
};

export default AddList;