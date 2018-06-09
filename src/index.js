import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store/connectStore';
import rootReducer from './reducers/rootReducer';
import StoreProvider from './store/components/StoreProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import Header from './components/Header';

const store = createStore(rootReducer);

ReactDOM.render(
    <StoreProvider store={store}>
        <Header />
        <Router>
            {routes}
        </Router>
    </StoreProvider>,
    document.getElementById('root'));
registerServiceWorker();
