import React from 'react';
import PropTypes from 'prop-types';

class StoreProvider extends React.Component {

    getChildContext() {
        const { store } = this.props;
        return {
            store
        }
    }

    componentDidMount() {
        this.props.store.notifySubscribers();
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

StoreProvider.childContextTypes = {
    store: PropTypes.object.isRequired
}

export default StoreProvider;