import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DiffTwoArrays from './components/DiffTwoArrays';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-md-6 text-left">
          <p>DiffTwoArrays</p>
        </div>
        <div className="col-md-6">
          <DiffTwoArrays />
        </div>
      </div>
    );
  }
}

export default App;
