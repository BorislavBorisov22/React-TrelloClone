
import React from 'react';

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
    }

    render() {
        return (
            <div>
                <div className="sc-htoDjs hdswki">
                    <h5 className="sc-dnqmqq drKaqf">What shall we call the board?</h5>
                    <div>
                        <form>
                            <label>
                                <input type="text" name="boardTitle" value="" className="input" />
                            </label>
                        </form>
                        <div className="sc-bxivhb hfjVaS">
                            <button className="sc-htpNat bNrnZp">Cancel</button>
                            <button className="sc-ifAKCX dGUCUV" type="button">Create</button>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default AddBoardForm;