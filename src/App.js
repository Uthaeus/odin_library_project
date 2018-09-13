import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Library from './containers/Library/Library';
import UserSub from './components/UserSub/UserSub';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Library />
        <UserSub />
      </div>
    );
  }
}

export default App;
