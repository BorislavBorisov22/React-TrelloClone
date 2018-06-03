import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import BoardsPage from './components/Boards/BoardsPage';

export default (
    <div>
        <Route path="/" exact component={App}></Route>
        <Route path="/boards" component={BoardsPage} />
    </div>
);