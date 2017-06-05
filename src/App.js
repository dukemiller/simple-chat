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
          <h2>Simple (Websocket) Chat</h2>
        </div>

        <Chat username={this.generateUsername()} />

      </div>
    );
  }

  generateUsername() {
    let number = Math.floor((Math.random() * 10000) + 1);
    return `Username${number}`;
  }
}

export default App;
