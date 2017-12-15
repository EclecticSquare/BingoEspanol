import React, { Component } from 'react';
import './App.css'
import BingoBoard from './bingoBoard.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <BingoBoard />
        </header>
      </div>
    );
  }
}

export default App;
