import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Boards from './boards/BoardsPage';
import BoardPage from './board/BoardPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>SomeApp</h1>
        </div>
      </Router>
    );
  }
}

export default App;
