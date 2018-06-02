import React from 'react';
import PropTypes from 'prop-types';

class StoreProvider extends React.Component {
    constructor() {
        this.store = this.props.store;
    }

    getChildContext() {
        const { store } = this.props.store;
        return {
            store
        }
    }
}

StoreProvider.childContextTypes = {
    store: PropTypes.object.isRequired
}

export default StoreProvider;