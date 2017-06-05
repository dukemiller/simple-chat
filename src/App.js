import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Chat } from './components/Chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Chat username={`Username${Math.floor((Math.random() * 10000) + 1)}`} />

      </div>
    );
  }
}

export default App;
