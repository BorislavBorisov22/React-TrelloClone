
import React from 'react';

class BoardPage extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
    }

    render() {
        return (
            <h1>Single board view</h1>
        );
    }
}

export default BoardPage;