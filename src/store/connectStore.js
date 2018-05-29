
import React from 'react';

const combineReducers = (reducerFunctions) => {
    return (state, action) => {
        return Object.keys(reducerFunctions).reduce((prevState, reducerKey) => {
            state[reducerKey] = reducerFunctions[reducerKey](prevState[reducerKey], action);
        }, state);

        return state;
    };
};

const connect = (mapStateToProps, mapDispatchToPros) => {

    return (Component) => {
        class StoreConnectedComponent extends React.Component {

            render() {
                return (<Component />)
            }
        }
    };
};

export { combineReducers };