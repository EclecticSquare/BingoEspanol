import React, { Component } from 'react';
import './App.css'
import Intro from './gameIntro.js'
import Buttons from './gameButtons.js'
import BoxFront from './boxFront.js'
import BuildBoard from './buildBoard.js'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <header className="App-header">
          <Buttons />
        </header>  
        <BuildBoard />       
    </div>
        
    );
  }
}

export default App;
