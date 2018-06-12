import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store/connectStore';
import rootReducer from './reducers/rootReducer';
import StoreProvider from './store/components/StoreProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { addNewBoard } from './actions/boardsActions';

const store = createStore(rootReducer);

let boards = JSON.parse(localStorage.getItem('boards'));
boards = boards && boards.length
    ? boards
    : [];

boards.forEach(board => {
    store.dispatch(addNewBoard(board));
});

ReactDOM.render(
    <StoreProvider store={store}>
        <Router>
            <App />
        </Router>
    </StoreProvider>,
    document.getElementById('root'));
registerServiceWorker();

