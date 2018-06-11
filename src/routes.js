import React from 'react';
import { Route } from 'react-router-dom';
import BoardsPage from './components/Boards/BoardsPage';
import SingleBoardPage from './components/SingleBoard/SingleBoardPage';

export default (
    <div>
        <Route path="/" exact component={BoardsPage}></Route>
        <Route path="/boards/:boardName" component={SingleBoardPage} />
        <Route path="/boards" exact component={BoardsPage} />
    </div>
);