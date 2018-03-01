import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SlidingPuzzle from './Game/Sliding-Puzzle';

class App extends Component {
  render() {
    SlidingPuzzle();
    return (
      <div id="myCanvas">
        
      </div>
    );
  }
}

export default App;
