
import React from 'react';
import PropTypes from 'prop-types';
import StoreApi from './store-api';

const combineReducers = (reducerFunctions) => {
    return (state, action) => {
        return Object.keys(reducerFunctions).reduce((prevState, reducerKey) => {
            const newState = {
                ...prevState,
                [reducerKey]: reducerFunctions[reducerKey](prevState[reducerKey], action)
            }

            return newState;
        }, state);
    };
};

const bindActionCreators = (actionCreators, dispatch) => {
    return Object.keys(actionCreators).reduce((acc, currentKey) => {
        acc[currentKey] = (...args) => {
            dispatch(actionCreators[currentKey](...args));
        };
        return acc;
    }, {});
};

const connectToStore = (mapStateToProps = () => ({}), mapDispatchToProps = () => ({})) => {

    return (Component) => {
        class StoreConnectedComponent extends React.PureComponent {

            constructor(props, ctx) {
                super(props, ctx);

                this.usedState = this.usedState.bind(this);
                this.extraProps = this.extraProps.bind(this);
                this.dispatchProps = this.dispatchProps.bind(this);

                this.store = this.context.store;
            }

            componentWillMount() {
                this.subscriptionId = this.store.subscribe(() => {
                    this.setState(this.usedState);
                });
            }

            componentWillUnmount() {
                if (this.subscriptionId) {
                    this.store.unsubscribe(this.subscriptionId);
                    this.subscriptionId = null;
                }
            }

            usedState() {
                return {
                    ...this.extraProps(),
                    ...this.dispatchProps(),
                    ...this.props
                }
            }

            extraProps() {
                return mapStateToProps(this.store.getState(), this.props);
            }

            dispatchProps() {
                return mapDispatchToProps(this.store.dispatch.bind(this));
            }

            render() {
                return (<Component {...this.usedState()} />)
            }
        }

        StoreConnectedComponent.contextTypes = {
            store: PropTypes.object.isRequired
        };

        return StoreConnectedComponent;
    };
};

const createStore = (reducer) => {
    return new StoreApi(reducer);
};

export { combineReducers, bindActionCreators, connectToStore };
export default createStore;

