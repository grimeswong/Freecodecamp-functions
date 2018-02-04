import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DiffTwoArrays from './components/DiffTwoArrays';
import SumAllNumberInRange from './components/SumAllNumberInRange';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-md-6 text-left">
          <p>Difference of Two Arrays</p>
          <p>Sum All Number</p>
        </div>
        <div className="col-md-6">
          <DiffTwoArrays />
          <SumAllNumberInRange />
        </div>
      </div>
    );
  }
}

export default App;
