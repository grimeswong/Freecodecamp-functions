import React, { Component } from 'react';
import './App.css';
import DisplayFunction from './components/DisplayFunction';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedFunction: "DiffTwoArrays"
      };
      console.log("this state is = " + this.state.selectedFunction);
  }

  render() {
    return (
      <div className="App">
        <div className="col-md-6 text-left">
          <p>Difference of Two Arrays</p>
          <p>Sum All Number</p>
        </div>
        <div className="col-md-6">
          <DisplayFunction selectedFunction = {this.state.selectedFunction}/>
        </div>
      </div>
    );
  }
}

export default App;
