import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  h= "Hello{''World''}"
  render() {
    return (
      <div className="App">
        {this.h}
      </div>
    );
  }
}

export default App;
