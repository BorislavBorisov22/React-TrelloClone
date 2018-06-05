
import React from 'react';
import PropTypes from 'prop-types';
import AddListForm from './AddListForm';

export class AddList extends React.Component {

    constructor() {
        super();

        this.state = {
            addListFormVisible: false
        };
    }

    toggleAddListForm() {

    }

    render() {
        return (
            <div>
                {!this.state.addListFormVisible &&
                    <div className="sc-jzJRlG kcGAOi">
                        <h4 className="sc-cSHVUG hRebLv">Add a list...</h4>
                    </div>
                }
            </div>
        );
    }
}

AddList.propTypes = {
    boardName: PropTypes.string.isRequired
};

export default AddList;